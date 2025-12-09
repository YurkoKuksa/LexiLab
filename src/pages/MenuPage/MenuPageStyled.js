import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  background: #e2e6edff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// export const TextContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 40px 20px;
//   background: linear-gradient(
//     135deg,
//     #b77b79 0%,
//     #dca8a3 20%,
//     #f4d7ce 40%,
//     #c48b86 60%,
//     #f4d7ce 80%,
//     #b77b79 100%
//   );
//   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.3);
// `;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(
    135deg,
    #9ea2a8 0%,
    #d3d7dd 20%,
    #f6f7f9 40%,
    #b7bcc3 60%,
    #f6f7f9 80%,
    #9ea2a8 100%
  );
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(125, 125, 125, 0.35);
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
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
