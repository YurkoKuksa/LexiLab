import Menu from '../../components/Menu/Menu';
import {
  AnimatedText,
  Cursor,
  PageWrapper,
  TextContainer,
} from './MenuPageStyled';
import React, { useState, useEffect, useCallback } from 'react';

// ✅ Винесено за межі компонента
const phrases = [
  'Expand your vocabulary with Lexi Yurko',
  'Discover better words',
  'Choose any topic and start practicing',
  'Unlock new words every day',
  'Level up your English effortlessly',
  'Learn smarter, not harder',
  'Boost your language skills in minutes',
  'Master words through fun practice',
  'Grow your confidence with every lesson',
  'Turn learning into a daily habit',
];

const MenuPage = () => {
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
  }, [previousPhrase]);

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

  return (
    <PageWrapper>
      <TextContainer>
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
