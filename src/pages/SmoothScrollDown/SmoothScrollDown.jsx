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

// behavior: 'smooth' - Застосовує плавний скролінг.
// block: 'start' - Скролить до початку елемента.
// inline: 'nearest' - Скролить до найближчого inline елемента.

// Якщо вам потрібен повільніший скролінг, ви можете реалізувати його за допомогою більш складних анімаційних рішень з використанням бібліотек, таких як react-scroll або react-spring, для повного контролю над анімаціями.

// import { Link } from "react-scroll";
// import React, { useRef } from "react";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
// const aboutBookRef = useRef(null);

// const handleScrollToAboutBook = () => {
//   scrollToRef(aboutBookRef);
// };

//    <Link to="elementID" smooth={true} duration={500}></Link>
//
//   const [showAboutBook, setShowAboutBook] = useState(false);
//   const [other, setOther] = useState(false);
//   // const [scrollTarget, setScrollTarget] = useState(null);

//   const handleShowAboutBook = () => {
//     setShowAboutBook(true);
//     setOther(false);
//     //scrollIntoView - для плавної прокрутки
//     // document.getElementById("yu").scrollIntoView({ behavior: "smooth" });
//     // setScrollTarget("yu");
//   };

//   const handleShowOther = () => {
//     setOther(true);
//     setShowAboutBook(false);
//     // document.getElementById("other").scrollIntoView({ behavior: "smooth" });
//     // setScrollTarget("other");
// };

//  return (
// {showAboutBook && <AboutBook />}
//         {other && <AllPublications />}
//         <hr />
//         <span id="other"></span>
//         <span id="yu"></span>
//         {scrollTarget &&
//           document.getElementById(scrollTarget) &&
//           document
//             .getElementById(scrollTarget)
//             .scrollIntoView({ behavior: "smooth" })})
