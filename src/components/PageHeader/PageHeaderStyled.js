import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';

export const Header = styled.header`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.75rem 1rem;

  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 0.5rem;

  /* На мобільних змінюємо layout */
  /* @media (max-width: 639px) {
    flex-direction: column;
    gap: 0.75rem;
  } */
`;

// export const BackButton = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.5rem 0.875rem;
//   background: linear-gradient(to right, #475569, #6b7280);
//   color: white;
//   border-radius: 0.5rem;
//   font-weight: 500;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.2s;
//   border: none;
//   cursor: pointer;

//   @media (min-width: 640px) {
//     padding: 0.625rem 1rem;
//   }

//   &:hover {
//     background: linear-gradient(to right, #334155, #4b5563);
//     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
//     transform: scale(1.05);
//   }

//   &:active {
//     background: linear-gradient(to right, #1e293b, #374151);
//   }

//   span {
//     font-size: 0.875rem;

//     @media (min-width: 640px) {
//       font-size: 1rem;
//     }
//   }
// `;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem; /*  Квадратна кнопка для іконки */
  background: linear-gradient(to right, #475569, #6b7280);
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  border: none;
  cursor: pointer;

  /*  Показуємо текст на екранах 480px+ */
  @media (min-width: 480px) {
    padding: 0.375rem 0.625rem;
    gap: 0.5rem;
  }

  @media (min-width: 640px) {
    padding: 0.5rem 0.875rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1024px) {
    padding: 0.625rem 1rem;
  }

  &:hover {
    background: linear-gradient(to right, #334155, #4b5563);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(to right, #1e293b, #374151);
  }

  /*  Ховаємо текст на дуже маленьких екранах */
  span {
    display: none;
    font-size: 0.75rem;

    @media (min-width: 480px) {
      display: inline;
    }

    @media (min-width: 640px) {
      font-size: 0.875rem;
    }

    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }
`;
// ```

// ---

// ## 📱 Візуалізація:

// ### **Mobile (<480px):**
// ```
// ┌──────┐
// │  ←   │  (тільки іконка)
// └──────┘
// ```

// ### **Mobile (480px+):**
// ```
// ┌──────────┐
// │  ← Назад │
// └──────────┘
// ```

// ### **Desktop:**
// ```
// ┌─────────────┐
// │  ←  Назад   │
// └─────────────┘

export const ArrowIcon = styled(ArrowLeft)`
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s;

  @media (min-width: 640px) {
    width: 1.25rem;
    height: 1.25rem;
  }

  ${BackButton}:hover & {
    transform: translateX(-0.25rem);
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1e293b;
  text-align: center;
  margin: 0;

  /* Мобільна версія - статичний */
  @media (max-width: 639px) {
    position: static;
    transform: none;
    width: 100%;
  }

  /* Десктоп - центрований абсолютно */
  @media (min-width: 640px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export const Cursor = styled.span`
  animation: pulse 1s infinite;

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

export const Spacer = styled.div`
  /* Ховаємо на мобільних */
  display: none;

  @media (min-width: 640px) {
    display: block;
    width: 4rem;
  }

  @media (min-width: 1024px) {
    width: 6rem;
  }
`;
