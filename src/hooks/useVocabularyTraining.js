import { useState, useEffect, useRef, useCallback } from 'react';
import { useGoogleSheetWords } from './useGoogleSheetWords';

export function useVocabularyTrainer(sheetId, sheetName, storageKey) {
  const {
    words: apiWords,
    loading,
    error,
  } = useGoogleSheetWords(sheetId, sheetName);

  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [feedback, setFeedback] = useState(null);
  const [learnedWords, setLearnedWords] = useState([]);
  const [queue, setQueue] = useState([]);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  // Унікальний ключ для localStorage (щоб різні теми зберігались окремо)
  const STORAGE_KEY = storageKey || `learnedWords_${sheetName}`;

  // Завантажити прогрес
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLearnedWords(parsed);
        console.log(
          `📥 Завантажено прогрес (${sheetName}):`,
          parsed.length,
          'слів'
        );
      } catch (err) {
        console.error('❌ Помилка завантаження:', err);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, [STORAGE_KEY, sheetName]);

  // Зберігати прогрес
  useEffect(() => {
    if (learnedWords.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learnedWords));
      console.log(
        `💾 Збережено прогрес (${sheetName}):`,
        learnedWords.length,
        'слів'
      );
    }
  }, [learnedWords, STORAGE_KEY, sheetName]);

  const pickRandomWord = useCallback(wordQueue => {
    if (wordQueue.length === 0) {
      setCurrentWord(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * wordQueue.length);
    const word = wordQueue[randomIndex];
    setCurrentWord(word);
    setTimeLeft(10);
    setUserInput('');
    setFeedback(null);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  const handleTimeout = useCallback(() => {
    setFeedback({ type: 'timeout', message: 'Час вийшов!' });
    setTimeout(() => {
      setQueue(prevQueue => {
        pickRandomWord(prevQueue);
        return prevQueue;
      });
    }, 1500);
  }, [pickRandomWord]);

  // Ініціалізація з API
  useEffect(() => {
    if (apiWords && apiWords.length > 0) {
      const initializedWords = apiWords.map(w => ({
        ...w,
        correctCount: 0,
        id: Math.random(),
      }));

      const unlearnedWords = initializedWords.filter(
        word => !learnedWords.some(learned => learned.word === word.word)
      );

      console.log('📚 Всього слів:', initializedWords.length);
      console.log('✅ Вивчено:', learnedWords.length);
      console.log('📖 Залишилось:', unlearnedWords.length);

      setQueue(unlearnedWords);

      if (unlearnedWords.length > 0) {
        pickRandomWord(unlearnedWords);
      }
    }
  }, [apiWords, learnedWords, pickRandomWord]);

  // Таймер
  useEffect(() => {
    if (currentWord && timeLeft > 0 && !feedback) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && currentWord && !feedback) {
      handleTimeout();
    }

    return () => clearTimeout(timerRef.current);
  }, [timeLeft, currentWord, feedback, handleTimeout]);

  const handleSubmit = useCallback(() => {
    if (!userInput.trim() || !currentWord) return;

    const isCorrect =
      userInput.trim().toLowerCase() === currentWord.translation.toLowerCase();

    if (isCorrect) {
      const updatedWord = {
        ...currentWord,
        correctCount: currentWord.correctCount + 1,
      };

      if (updatedWord.correctCount >= 3) {
        setFeedback({ type: 'learned', message: 'Вивчено! 🎉' });
        setLearnedWords(prev => [...prev, updatedWord]);

        const newQueue = queue.filter(w => w.id !== currentWord.id);
        setQueue(newQueue);

        setTimeout(() => {
          pickRandomWord(newQueue);
        }, 1500);
      } else {
        setFeedback({
          type: 'correct',
          message: `Правильно! (${updatedWord.correctCount}/3)`,
        });

        const newQueue = queue.map(w =>
          w.id === currentWord.id ? updatedWord : w
        );
        setQueue(newQueue);

        setTimeout(() => {
          pickRandomWord(newQueue);
        }, 1500);
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

      setTimeout(() => {
        pickRandomWord(newQueue);
      }, 2000);
    }
  }, [userInput, currentWord, queue, pickRandomWord]);

  const handleResetProgress = useCallback(() => {
    if (window.confirm('Ви впевнені? Весь прогрес буде втрачено!')) {
      localStorage.removeItem(STORAGE_KEY);
      setLearnedWords([]);
      console.log('🔄 Прогрес скинуто');
      window.location.reload();
    }
  }, [STORAGE_KEY]);

  return {
    // Стан
    currentWord,
    userInput,
    setUserInput,
    timeLeft,
    feedback,
    learnedWords,
    queue,
    loading,
    error,

    // Refs
    inputRef,

    // Функції
    handleSubmit,
    handleResetProgress,
  };
}
