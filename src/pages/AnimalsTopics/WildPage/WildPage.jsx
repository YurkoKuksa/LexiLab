import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Wild from '../../../components/Animals/Wild/Wild';
import {
  ArrowIcon,
  BackButton,
  Content,
  Cursor,
  Header,
  HeaderContent,
  HeaderFlex,
  MainContainer,
  Spacer,
  Title,
} from '../AnimalStyled';

const WildPage = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Wild Animals';

  // Ефект друкування
  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < fullText.length) {
      // Друкуємо по одній літері
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText.length === fullText.length) {
      // Пауза після повного тексту
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Видаляємо по одній літері
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 100);
    } else if (isDeleting && displayText.length === 0) {
      // Пауза перед новим циклом
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  return (
    <MainContainer>
      <Header>
        <HeaderContent>
          <HeaderFlex>
            <BackButton onClick={() => navigate(-1)}>
              <ArrowIcon />
              <span>Назад</span>
            </BackButton>

            <Title>
              {displayText}
              <Cursor>|</Cursor>
            </Title>

            <Spacer />
          </HeaderFlex>
        </HeaderContent>
      </Header>

      <Content>
        <Wild />
      </Content>
    </MainContainer>
  );
};

export default WildPage;
