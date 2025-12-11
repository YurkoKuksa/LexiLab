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

// Головний контейнер з колонками
export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Колонка (секція)
export const MenuSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  margin: -0.5rem -0.5rem 1.25rem -0.5rem;
  padding: 1rem 1.25rem;

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
    left: 1.25rem;
    bottom: -2px;
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, #c6483fff, #de8b8bff);
  }
`;

// Navigation
export const Nav = styled.nav`
  /* Стилі nav */
`;

// Список
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Елемент списку
export const MenuItem = styled.li`
  /* Базові стилі */
`;

// Styled NavLink
export const AnimatedNavLink = styled(NavLink)`
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  width: 100%;

  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

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
        case 'seaanim':
          return 'linear-gradient(to right, #06b6d4, #3b82f6)';
        case 'insects':
          return 'linear-gradient(to right, #84cc16, #22c55e)';
        case 'reptiles':
          return 'linear-gradient(to right, #22c55e, #10b981)';
        default:
          return 'linear-gradient(to right, #3b82f6, #a855f7)';
      }
    }};
  }
`;

// Текст з градієнтом
export const MenuText = styled.span`
  position: relative;
  display: inline-block;
  font-weight: 600;
  letter-spacing: -0.025em;
  transition: all 0.3s ease-in-out;
  font-size: 0.95rem;

  background: linear-gradient(to right, #374151, #4b5563, #1f2937);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.32));

  ${AnimatedNavLink}:hover & {
    transform: translateX(0.25rem);
    background: none;
    -webkit-text-fill-color: white;
    color: white;
    filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.45));
  }
`;

// Outlet контейнер
export const OutletContainer = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

// ✅ ОНОВЛЕНИЙ: Placeholder з кращим заголовком
export const PlaceholderSection = styled(MenuSection)`
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border: 2px dashed #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  opacity: 0.7;
  transition: all 0.3s ease;

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
  font-size: 0.875rem;
  margin: 0;
`;

// import { Bird, Dog, Fish, Bug, Home } from 'lucide-react';

// const menuSections = [
//   {
//     title: 'Тварини',
//     icon: Home,
//     items: [
//       {
//         to: '/birds',
//         label: 'Birds',
//         variant: 'birds',
//         delay: '0s',
//         icon: Bird,
//       },
//       {
//         to: '/wild',
//         label: 'Wild Animals',
//         variant: 'wild',
//         delay: '0.2s',
//         icon: Dog,
//       },
//     ],
//   },
//   // ...
// ];

// // У MenuStyled.js додайте:
// export const ItemIcon = styled.span`
//   display: inline-flex;
//   align-items: center;
//   margin-right: 0.5rem;

//   svg {
//     width: 1.1rem;
//     height: 1.1rem;
//   }
// `;

// // У Menu.jsx:
// (
//   <AnimatedNavLink to={item.to} $variant={item.variant} $delay={item.delay}>
//     <MenuText>
//       {item.icon && (
//         <ItemIcon>
//           <item.icon />
//         </ItemIcon>
//       )}
//       {item.label}
//     </MenuText>
//   </AnimatedNavLink>
// )```

// ---

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
