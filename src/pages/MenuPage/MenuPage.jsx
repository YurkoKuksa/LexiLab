import Menu from '../../components/Menu/Menu';
import {
  AnimatedText,
  Cursor,
  PageWrapper,
  TextContainer,
} from './MenuPageStyled';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const MenuPage = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Друже' };

  // Винесено всередину компонента, щоб використовувати `name`
  const phrases = useMemo(
    () => [
      'Expand your vocabulary',
      'Discover better words',
      'Choose any topic and start practicing',
      'Unlock new words every day',
      'Level up your English effortlessly',
      'Learn smarter, not harder',
      'Boost your language skills in minutes',
      'Master words through fun practice',
      'Grow your confidence with every lesson',
      'Turn learning into a daily habit',
      'Expand your vocabulary with Yurko',
      `Hello, ${name}!`,
      'Здоровенькі були!',
      `How are you doing?, ${name}!`,
      `Hey there, ${name}!`,
      `Welcome back, ${name}!`,
      `Вітаю тебе, ${name}!`,
      `How's it going, ${name}?`,
      'Ready to learn something new?',
      'Прокачай словниковий запас разом з Yurko',
      "Let's boost your vocabulary!",
      `Що нового, ${name}?`,
      'Time to learn new words!',
      `Радий тебе бачити, ${name}!`,
      `${name}, як справи?`,
      `${name}, готовий вчити нові слова?`,
      `${name}, що сьогодні вивчаємо?`,
      `${name}, маєш хвилинку на українську?`,
      `${name}, налаштований на навчання?`,
      `${name}, how are you today?`,
      `${name}, ready to expand your vocabulary?`,
      `${name}, want to learn a new word?`,
      `${name}, shall we start?`,
      `${name}, up for a quick lesson?`,
      `${name}, мозок готовий до прокачки?`,
      `${name}, вчимо слова чи відкладаємо на потім?`,
      `${name}, нове слово — так чи ні?`,
      "Let's learn something new today!",
      'Time to boost your vocabulary!',
      'One new word can change a lot.',
      'Small steps lead to big progress.',
      'Ready to level up your language skills?',
      'Every day is a good day to learn.',
      'Knowledge grows with practice.',
      'Навчання починається просто зараз!',
      'Кожне нове слово — це крок уперед.',
      'Час інвестувати в себе.',
      'Трохи зусиль — і результат не змусить чекати.',
      'Вчися сьогодні для кращого завтра.',
      'Навіть 5 хвилин мають значення.',
    ],
    [name]
  );

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [previousPhrase, setPreviousPhrase] = useState('');

  const getRandomPhrase = useCallback(() => {
    const availablePhrases = phrases.filter(
      phrase => phrase !== previousPhrase
    );
    const randomIndex = Math.floor(Math.random() * availablePhrases.length);
    return availablePhrases[randomIndex];
  }, [previousPhrase, phrases]);

  useEffect(() => {
    if (currentIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentPhrase[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setPreviousPhrase(currentPhrase);
        const newPhrase = getRandomPhrase();
        setCurrentPhrase(newPhrase);
        setDisplayedText('');
        setCurrentIndex(0);
      }, 3000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, currentPhrase, getRandomPhrase]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageWrapper>
      <TextContainer className={isScrolled ? 'scrolled' : ''}>
        <AnimatedText>
          {displayedText}
          <Cursor>|</Cursor>
        </AnimatedText>
      </TextContainer>

      <Menu />
    </PageWrapper>
  );
};

export default MenuPage;
