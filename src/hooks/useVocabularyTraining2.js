// Попередній код перед розширенням діапазону відповідей
// ===================================================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { useGoogleSheetWords } from './useGoogleSheetWords';

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

  const {
    words: apiWords,
    loading,
    error,
  } = useGoogleSheetWords(sheetId, sheetName, reversed);

  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [feedback, setFeedback] = useState(null);
  const [learnedWords, setLearnedWords] = useState([]);
  const [queue, setQueue] = useState([]);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const direction = reversed ? `${to}-${from}` : `${from}-${to}`;
  const STORAGE_KEY = storageKey || `learnedWords_${sheetName}_${direction}`;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    console.log(`🔍 Спроба завантажити прогрес для ключа: ${STORAGE_KEY}`);
    console.log(`📦 Знайдені дані:`, saved);

    if (!saved) {
      console.log(`❌ Прогрес не знайдено для ${STORAGE_KEY}`);
      setLearnedWords([]);
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        setLearnedWords(parsed);
        console.log(
          `✅ Завантажено прогрес "${sheetName}" (${direction}): ${parsed.length} слів`
        );
      } else {
        throw new Error('Невірний формат даних');
      }
    } catch (err) {
      console.error('❌ Помилка завантаження прогресу:', err);
      localStorage.removeItem(STORAGE_KEY);
      setLearnedWords([]);
    }
  }, [STORAGE_KEY, sheetName, direction]);

  useEffect(() => {
    if (learnedWords.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(learnedWords));
        console.log(
          `💾 Збережено прогрес "${sheetName}" (${direction}): ${learnedWords.length} слів`
        );
        console.log(`🔑 Ключ: ${STORAGE_KEY}`);
      } catch (err) {
        console.error('❌ Помилка збереження прогресу:', err);
      }
    }
  }, [learnedWords, STORAGE_KEY, sheetName, direction]);

  const pickRandomWord = useCallback(
    wordQueue => {
      if (!wordQueue || wordQueue.length === 0) {
        setCurrentWord(null);
        return;
      }

      const randomIndex = Math.floor(Math.random() * wordQueue.length);
      const word = wordQueue[randomIndex];

      setCurrentWord(word);
      setTimeLeft(timeLimit);
      setUserInput('');
      setFeedback(null);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    },
    [timeLimit]
  );

  const handleTimeout = useCallback(() => {
    setFeedback({ type: 'timeout', message: 'Час вийшов!' });

    setTimeout(() => {
      setQueue(prevQueue => {
        pickRandomWord(prevQueue);
        return prevQueue;
      });
    }, correctAnswerDelay);
  }, [pickRandomWord, correctAnswerDelay]);

  useEffect(() => {
    if (!apiWords || apiWords.length === 0) return;

    const initializedWords = apiWords.map(w => ({
      ...w,
      correctCount: 0,
      id: `${w.word}_${w.translation}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
    }));

    const unlearnedWords = initializedWords.filter(
      word =>
        !learnedWords.some(
          learned =>
            learned.word === word.word &&
            learned.translation === word.translation
        )
    );

    console.log(`📚 Статистика "${sheetName}" (${direction}):`);
    console.log(`   Всього слів: ${initializedWords.length}`);
    console.log(`   Вивчено: ${learnedWords.length}`);
    console.log(`   Залишилось: ${unlearnedWords.length}`);

    setQueue(unlearnedWords);

    if (unlearnedWords.length > 0) {
      pickRandomWord(unlearnedWords);
    }
  }, [apiWords, learnedWords, pickRandomWord, sheetName, direction]);

  useEffect(() => {
    if (!currentWord || feedback || isPaused) {
      return;
    }

    if (timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      handleTimeout();
    }

    return () => clearTimeout(timerRef.current);
  }, [timeLeft, currentWord, feedback, handleTimeout, isPaused]);

  const handleSubmit = useCallback(() => {
    if (!userInput.trim() || !currentWord || feedback) return;

    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedAnswer = currentWord.translation.toLowerCase();
    const isCorrect = normalizedInput === normalizedAnswer;

    if (isCorrect) {
      const updatedWord = {
        ...currentWord,
        correctCount: currentWord.correctCount + 1,
      };

      if (updatedWord.correctCount >= requiredCorrectAnswers) {
        setFeedback({ type: 'learned', message: 'Вивчено! 🎉' });

        setTimeout(() => {
          setLearnedWords(prev => [...prev, updatedWord]);
          const newQueue = queue.filter(w => w.id !== currentWord.id);
          setQueue(newQueue);
          pickRandomWord(newQueue);
        }, correctAnswerDelay);
      } else {
        setFeedback({
          type: 'correct',
          message: `Правильно! (${updatedWord.correctCount}/${requiredCorrectAnswers})`,
        });

        const newQueue = queue.map(w =>
          w.id === currentWord.id ? updatedWord : w
        );
        setQueue(newQueue);

        setTimeout(() => {
          pickRandomWord(newQueue);
        }, correctAnswerDelay);
      }
    } else {
      setFeedback({
        type: 'wrong',
        message: `Неправильно! Правильна відповідь: ${currentWord.translation}`,
      });

      const resetWord = { ...currentWord, correctCount: 0 };
      const newQueue = queue.map(w =>
        w.id === currentWord.id ? resetWord : w
      );
      setQueue(newQueue);

      setTimeout(() => {
        pickRandomWord(newQueue);
      }, wrongAnswerDelay);
    }
  }, [
    userInput,
    currentWord,
    queue,
    feedback,
    pickRandomWord,
    requiredCorrectAnswers,
    correctAnswerDelay,
    wrongAnswerDelay,
  ]);

  const handleResetProgress = useCallback(() => {
    const confirmed = window.confirm(
      `Ви впевнені що хочете скинути весь прогрес для "${sheetName}" (${direction})? Це не можна буде скасувати!`
    );

    if (confirmed) {
      try {
        localStorage.removeItem(STORAGE_KEY);
        setLearnedWords([]);
        console.log(`🔄 Прогрес "${sheetName}" (${direction}) скинуто`);
        window.location.reload();
      } catch (err) {
        console.error('❌ Помилка скидання прогресу:', err);
      }
    }
  }, [STORAGE_KEY, sheetName, direction]);

  return {
    currentWord,
    userInput,
    setUserInput,
    timeLeft,
    setTimeLeft,
    feedback,
    learnedWords,
    queue,
    loading,
    error,
    inputRef,
    handleSubmit,
    handleResetProgress,
    totalWords: apiWords?.length || 0,
    learnedCount: learnedWords.length,
    remainingCount: queue.length,
    direction,
  };
}
