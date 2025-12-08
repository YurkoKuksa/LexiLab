import styled from 'styled-components';

export const BackDropBox = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isVisible',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 998;
  opacity: 1;
  pointer-events: initial;
  visibility: visible;

  backdrop-filter: blur(8px);

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const ModalContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isVisible',
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 800px;
  width: 500px;

  background-color: yellowgreen;
  border-radius: 5px;

  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible
      ? 'translate(-50%, -50%) scale(1)'
      : 'translate(-50%, -50%) scale(0.5)'};
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
`;

export const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  font-size: 20px;
  padding: 20px;
  height: 100%; /* Додаємо висоту для використання всієї висоти контейнера */
`;

export const Title = styled.h1`
  flex: 1;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  opacity: 0.8;

  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #0a2161;
  padding: 10px 8px;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #1f4fd1;
  }
  &:active {
    background-color: #406ce3;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;
