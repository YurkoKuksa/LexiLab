import { useState, useEffect } from 'react';

export function useTypewriterEffect(text, options = {}) {
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseAfterTyping = 2000,
    pauseBeforeRestart = 500,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      // Друкуємо по одній літері
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === text.length) {
      // Пауза після повного тексту
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && displayText.length > 0) {
      // Видаляємо по одній літері
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Пауза перед новим циклом
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    text,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseBeforeRestart,
  ]);

  return displayText;
}
