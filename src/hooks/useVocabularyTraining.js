import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useGoogleSheetWords } from './useGoogleSheetWords';
import { pickRandom } from '../utils/random';
import { normalizeWord } from '../utils/normalizeWord';

export function useVocabularyTrainer(sheetId, sheetName, options = {}) {
  const {
    storageKey,
    timeLimit = 10,
    requiredCorrectAnswers = 3,
    correctAnswerDelay = 1500,
    wrongAnswerDelay = 2000,
    reversed = false,
    isPaused = false,
    from = 'A',
    to = 'B',
  } = options;

  /* ---------------- data ---------------- */

  const {
    words: apiWords,
    loading,
    error,
  } = useGoogleSheetWords(sheetId, sheetName);

  /* ---------------- state ---------------- */

  const [queue, setQueue] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [feedback, setFeedback] = useState(null);
  const [learnedWords, setLearnedWords] = useState([]);

  const timerRef = useRef(null);
  const inputRef = useRef(null);

  /* ---------------- direction & storage ---------------- */

  const direction = reversed ? `${to}-${from}` : `${from}-${to}`;
  const STORAGE_KEY = storageKey || `learnedWords_${sheetName}_${direction}`;

  /* ---------------- helpers (derived state) ---------------- */

  const { questionWord, validAnswers } = useMemo(() => {
    if (!currentWord) {
      return { questionWord: null, validAnswers: [] };
    }

    return reversed
      ? {
          questionWord: pickRandom(currentWord.translations),
          validAnswers: currentWord.words,
        }
      : {
          questionWord: pickRandom(currentWord.words),
          validAnswers: currentWord.translations,
        };
  }, [currentWord, reversed]);

  /* ---------------- load progress ---------------- */

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setLearnedWords(parsed);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [STORAGE_KEY]);

  /* ---------------- save progress ---------------- */

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(learnedWords));
  }, [learnedWords, STORAGE_KEY]);

  /* ---------------- init queue ---------------- */

  useEffect(() => {
    if (!apiWords.length) return;

    const initialized = apiWords.map(w => ({
      ...w,
      correctCount: 0,
      id: crypto.randomUUID(),
    }));

    const unlearned = initialized.filter(
      w =>
        !learnedWords.some(
          l =>
            JSON.stringify(l.words) === JSON.stringify(w.words) &&
            JSON.stringify(l.translations) === JSON.stringify(w.translations)
        )
    );

    setQueue(unlearned);
    setCurrentWord(unlearned[0] || null);
    setTimeLeft(timeLimit);
    setFeedback(null);
  }, [apiWords, learnedWords, timeLimit]);

  /* ---------------- timeout handler ---------------- */

  const handleTimeout = useCallback(() => {
    setFeedback({ type: 'timeout', message: 'Час вийшов!' });

    setTimeout(() => {
      setQueue(prevQueue => {
        const next = prevQueue.length ? pickRandom(prevQueue) : null;
        setCurrentWord(next);
        return prevQueue;
      });

      setTimeLeft(timeLimit);
      setFeedback(null);
    }, wrongAnswerDelay);
  }, [timeLimit, wrongAnswerDelay]);

  /* ---------------- timer ---------------- */

  useEffect(() => {
    if (!currentWord || feedback || isPaused) return;
    if (timeLeft <= 0) return;

    timerRef.current = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [timeLeft, currentWord, feedback, isPaused]);

  useEffect(() => {
    if (timeLeft !== 0) return;
    if (!currentWord || feedback || isPaused) return;

    handleTimeout();
  }, [timeLeft, currentWord, feedback, isPaused, handleTimeout]);

  /* ---------------- focus input ---------------- */
  useEffect(() => {
    if (!currentWord || !inputRef.current) return;
    if (isPaused) return; // не фокусуємо під час паузи

    const timeout = setTimeout(() => {
      inputRef.current.focus();
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentWord, isPaused]);

  /* ---------------- submit ---------------- */

  const handleSubmit = useCallback(() => {
    if (!userInput.trim() || !currentWord || feedback) return;

    clearTimeout(timerRef.current);

    // const input = userInput.trim().toLowerCase();
    // const isCorrect = validAnswers.some(a => a.toLowerCase() === input);
    const normalizedInput = normalizeWord(userInput);

    const isCorrect = validAnswers.some(
      a => normalizeWord(a) === normalizedInput
    );

    if (isCorrect) {
      const updated = {
        ...currentWord,
        correctCount: currentWord.correctCount + 1,
      };

      if (updated.correctCount >= requiredCorrectAnswers) {
        setFeedback({ type: 'learned', message: 'Вивчено! 🎉' });

        setTimeout(() => {
          setLearnedWords(prev => [...prev, updated]);
          const newQueue = queue.filter(w => w.id !== updated.id);
          setQueue(newQueue);
          setCurrentWord(newQueue[0] || null);
          setTimeLeft(timeLimit);
          setFeedback(null);
        }, correctAnswerDelay);
      } else {
        setFeedback({
          type: 'correct',
          message: `Правильно! (${updated.correctCount}/${requiredCorrectAnswers})`,
        });

        const newQueue = queue.map(w => (w.id === updated.id ? updated : w));
        setQueue(newQueue);

        setTimeout(() => {
          setCurrentWord(pickRandom(newQueue));
          setTimeLeft(timeLimit);
          setFeedback(null);
        }, correctAnswerDelay);
      }
    } else {
      setFeedback({
        type: 'wrong',
        // message: `Неправильно! Правильна відповідь: ${validAnswers.join(', ')}`,
        message: `Неправильно! Правильна відповідь:  ${validAnswers[0]}`,

        //  Показувати всі, але красиво
        // message: `Неправильно! Можливі відповіді: ${validAnswers.join(' / ')}`
      });

      const reset = { ...currentWord, correctCount: 0 };
      const newQueue = queue.map(w => (w.id === reset.id ? reset : w));
      setQueue(newQueue);

      setTimeout(() => {
        setCurrentWord(pickRandom(newQueue));
        setTimeLeft(timeLimit);
        setFeedback(null);
      }, wrongAnswerDelay);
    }

    setUserInput('');
  }, [
    userInput,
    currentWord,
    validAnswers,
    queue,
    feedback,
    requiredCorrectAnswers,
    correctAnswerDelay,
    wrongAnswerDelay,
    timeLimit,
  ]);

  /* ---------------- reset ---------------- */

  const handleResetProgress = useCallback(() => {
    if (!window.confirm('Скинути весь прогрес?')) return;
    localStorage.removeItem(STORAGE_KEY);
    setLearnedWords([]);
    window.location.reload();
  }, [STORAGE_KEY]);

  /* ---------------- public api ---------------- */

  return {
    currentWord: currentWord ? { ...currentWord, word: questionWord } : null,
    userInput,
    setUserInput,
    timeLeft,
    feedback,
    learnedWords,
    queue,
    loading,
    error,
    inputRef,
    handleSubmit,
    handleResetProgress,
    totalWords: apiWords.length,
    learnedCount: learnedWords.length,
    remainingCount: queue.length,
    direction,
  };
}
