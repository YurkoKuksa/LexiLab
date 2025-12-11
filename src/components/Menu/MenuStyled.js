import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const MenuContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;

  /* Мобільна версія - одна колонка */
  grid-template-columns: 1fr;

  /* Планшет - 2 колонки */
  @media (min-width: 640px) {
    padding: 1.5rem;
    gap: 1.75rem;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Планшет великий - 2 колонки */
  @media (min-width: 768px) {
    padding: 2rem;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Десктоп малий - 3 колонки */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Десктоп великий - 4 колонки */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MenuSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
  margin: -0.5rem -0.5rem 1rem -0.5rem;
  padding: 0.875rem 1rem;

  /* Градієнтний фон */
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 0.75rem 0.75rem 0 0;

  /* Тінь */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  /* Бордер знизу */
  border-bottom: 2px solid #e2e8f0;

  /* Текстовий ефект */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 1rem;
    bottom: -2px;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, #c6483fff, #de8b8bff);
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 1.25rem;
    margin: -0.5rem -0.5rem 1.25rem -0.5rem;

    &::before {
      left: 1.25rem;
      width: 60px;
    }
  }
`;

// Navigation
export const Nav = styled.nav`
  /* Стилі nav */
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

// Елемент списку
export const MenuItem = styled.li`
  /* Базові стилі */
`;

export const AnimatedNavLink = styled(NavLink)`
  display: block;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  width: 100%;

  /* Анімація float відключена на мобільних */
  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: ${props => props.$delay || '0s'};
  }

  &:hover {
    transform: translateX(0.5rem) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

    background: ${props => {
      switch (props.$variant) {
        case 'birds':
          return 'linear-gradient(to right, #3b82f6, #a855f7)';
        case 'wild':
          return 'linear-gradient(to right, #a855f7, #ec4899)';
        case 'domestic':
          return 'linear-gradient(to right, #ec4899, #ef4444)';
        case 'sea':
          return 'linear-gradient(to right, #06b6d4, #3b82f6)';
        case 'insects':
          return 'linear-gradient(to right, #84cc16, #22c55e)';
        case 'parts':
          return 'linear-gradient(to right, #22c55e, #10b981)';
        case 'sounds':
          return 'linear-gradient(to right, #ff7e5f, #feb47b)';
        case 'words':
          return 'linear-gradient(to right, #2b5876, #4e4376)';
        case 'dinos':
          return 'linear-gradient(to right, #11998e, #38ef7d)';
        case 'fish':
          return 'linear-gradient(to right, #6a11cb, #2575fc)';
        case 'group':
          return 'linear-gradient(to right, #f12711, #f5af19)';
        case 'micro':
          return 'linear-gradient(to right, #2af598, #009efd)';
        case 'myth':
          return 'linear-gradient(to right, #ff9a9e, #fecfef)';
        case 'pets':
          return 'linear-gradient(to right, #485563, #29323c)';
        case 'cats':
          return 'linear-gradient(to right, #00c6fb, #005bea)';
        case 'peach':
          return 'linear-gradient(to right, #f6d365, #fda085)';
        case 'volcano':
          return 'linear-gradient(to right, #ff512f, #dd2476)';
        case 'aqua':
          return 'linear-gradient(to right, #78ffd6, #007991)';
        case 'desert':
          return 'linear-gradient(to right, #c79081, #dfa579)';
        case 'forest':
          return 'linear-gradient(to right, #134e5e, #71b280)';
        case 'candy':
          return 'linear-gradient(to right, #fcb045, #fd1d1d)';
        case 'galaxy':
          return 'linear-gradient(to right, #00dbde, #fc00ff)';
        case 'lavender':
          return 'linear-gradient(to right, #b06ab3, #4568dc)';
        case 'coffee':
          return 'linear-gradient(to right, #603813, #b29f94)';
        case 'mint':
          return 'linear-gradient(to right, #a8ff78, #78ffd6)';
        case 'citrus':
          return 'linear-gradient(to right, #fceabb, #f8b500)';
        default:
          return 'linear-gradient(to right, #3b82f6, #a855f7)';
      }
    }};
  }

  /* На мобільних менш виражений hover */
  @media (max-width: 767px) {
    &:hover {
      transform: translateX(0.25rem) scale(1.01);
    }
  }
`;

export const MenuText = styled.span`
  position: relative;
  display: inline-block;
  font-weight: 600;
  letter-spacing: -0.025em;
  transition: all 0.3s ease-in-out;
  font-size: 0.875rem;

  background: linear-gradient(to right, #374151, #4b5563, #1f2937);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.32));

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  ${AnimatedNavLink}:hover & {
    transform: translateX(0.25rem);
    background: none;
    -webkit-text-fill-color: white;
    color: white;
    filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.45));
  }
`;

export const OutletContainer = styled.div`
  margin-top: 1.5rem;
  padding: 0 1rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-top: 2rem;
    padding: 0 2rem;
  }
`;

export const PlaceholderSection = styled(MenuSection)`
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border: 2px dashed #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  opacity: 0.7;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    min-height: 200px;
  }

  &:hover {
    opacity: 0.9;
    border-color: #9ca3af;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  }

  ${SectionTitle} {
    color: #9ca3af;

    &::after {
      opacity: 0.3;
    }
  }
`;

export const PlaceholderText = styled.p`
  color: #9ca3af;
  font-style: italic;
  text-align: center;
  font-size: 0.8rem;
  margin: 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

// ## 5️⃣ **Візуалізація структури:**

// ┌─────────────────────────────────────────────────────────────┐
// │                         MenuContainer                        │
// ├──────────────────┬──────────────────┬──────────────────────┤
// │  MenuSection 1   │  MenuSection 2   │  MenuSection 3       │
// │  ┌────────────┐  │  ┌────────────┐  │  ┌────────────┐     │
// │  │ Тварини    │  │  │ Водний світ│  │  │ Комахи     │     │
// │  ├────────────┤  │  ├────────────┤  │  ├────────────┤     │
// │  │ • Birds    │  │  │ • Fish     │  │  │ • Insects  │     │
// │  │ • Wild     │  │  │ • Sea      │  │  │ • Reptiles │     │
// │  │ • Domestic │  │  └────────────┘  │  └────────────┘     │
// │  └────────────┘  │                  │                      │
// └──────────────────┴──────────────────┴──────────────────────┘
