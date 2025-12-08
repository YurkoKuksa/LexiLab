import { useCallback, useEffect, useState } from 'react';
import {
  BackDropBox,
  CloseBtn,
  MainBox,
  ModalContainer,
  Title,
} from './Modal.Styled';

const Modal = ({ children, toggleModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      toggleModal();
    }, 500);
  }, [toggleModal]);

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    isOpen && (
      <BackDropBox onClick={handleClickOnBackdrop} isVisible={isVisible}>
        <ModalContainer isVisible={isVisible}>
          <MainBox>
            <Title>Modal</Title>

            <CloseBtn onClick={closeModal}> CLOSE BUTTON</CloseBtn>
          </MainBox>
          {children}
        </ModalContainer>
      </BackDropBox>
    )
  );
};

export default Modal;

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (
//         event.key === "Escape" ||
//         event.key === " " ||
//         event.key === "Enter" ||
//         event.key === "+"
//       ) {
//         close();
//       }
//     };
