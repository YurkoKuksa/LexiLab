import React from 'react';
import {
  DownContainer,
  MainBox,
  Pagetitle,
  ScrollBtn,
  Title,
  Wrapper,
} from './SmoothScrollDown.Stytled';

const SmoothScrollDown = () => {
  // Код для скролінгу

  const handleClickScroll = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        // block: 'start',
        // inline: 'nearest',
      });
    }
  };

  return (
    <MainBox>
      <Wrapper>
        <Pagetitle>Smooth scrollDown page</Pagetitle>
        <ScrollBtn
          onClick={() =>
            handleClickScroll('scroll-section')
          } /* Вішаємо функцію на кнопку */
          type="button"
          //   style={{
          //     color: '#3c0610',
          //   }}
        >
          Scroll Down
        </ScrollBtn>
      </Wrapper>
      <DownContainer id="scroll-section">
        {/* добавляємо відповідне ID */}
        <Title>You scrolled down successfully </Title>
      </DownContainer>
    </MainBox>
  );
};

export default SmoothScrollDown;
