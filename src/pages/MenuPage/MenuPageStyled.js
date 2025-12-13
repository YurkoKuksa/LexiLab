import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  background: #e2e6edff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* outline: 2px dotted red; */
`;

export const TextContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  min-height: 160px;

  background: linear-gradient(
    135deg,
    rgba(158, 162, 168, 0.95) 0%,
    rgba(211, 215, 221, 0.95) 20%,
    rgba(246, 247, 249, 0.95) 40%,
    rgba(183, 188, 195, 0.95) 60%,
    rgba(246, 247, 249, 0.95) 80%,
    rgba(158, 162, 168, 0.95) 100%
  );

  /*  Blur ефект для елементів під контейнером */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /*  Плавна поява тіні при прокрутці */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(125, 125, 125, 0.35);
  transition: box-shadow 0.3s ease, border-bottom 0.3s ease;

  /*  При прокрутці (можна додати клас через JS) */
  &.scrolled {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid rgba(125, 125, 125, 0.5);
  }

  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 140px;
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    min-height: 120px;
    padding: 25px 10px;
  }
`;

export const AnimatedText = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6a6363ff;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;

  /* Обмежуємо кількість рядків */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  /* Висота рядка */
  line-height: 1.3;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.25;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    line-height: 1.2;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-weight: 300;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

//   background: linear-gradient(
//     135deg,
//     #b77b79 0%,
//     #dca8a3 20%,
//     #f4d7ce 40%,
//     #c48b86 60%,
//     #f4d7ce 80%,
//     #b77b79 100%
