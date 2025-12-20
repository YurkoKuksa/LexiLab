import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import {
  // LogoSymbol,
  // LogoText,
  ApexLogo,
} from '../Am/Logo/ApexLogoTwo';

// ============ LOGO COMPONENTS ============
// const LogoSymbol = ({
//   size = 60,
//   isDark = false,
//   className = '',
//   animated = true,
//   variant = 'geometric',
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const colorSchemes = {
//     geometric: {
//       light: {
//         primary: '#134F5C',
//         secondary: '#45818E',
//         accent: '#76A5AF',
//       },
//       dark: {
//         primary: '#45818E',
//         secondary: '#76A5AF',
//         accent: '#A2C4C9',
//       },
//     },
//   };

//   const colors = colorSchemes[variant][isDark ? 'dark' : 'light'];

//   const getTransform = index => {
//     if (!animated || !isHovered) return 'translate(0, 0)';
//     const offsets = { 1: -3, 2: -2, 3: -1 };
//     return `translate(0, ${offsets[index]})`;
//   };

//   return (
//     <div
//       className={className}
//       style={{
//         width: size,
//         height: size,
//         flexShrink: 0,
//         cursor: animated ? 'pointer' : 'default',
//         display: 'inline-block',
//       }}
//       onMouseEnter={() => animated && setIsHovered(true)}
//       onMouseLeave={() => animated && setIsHovered(false)}
//     >
//       <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g
//           transform={getTransform(1)}
//           style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
//         >
//           <path d="M30 5 L55 20 L45 35 L30 30 Z" fill={colors.primary} />
//         </g>
//         <g
//           transform={getTransform(2)}
//           style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
//         >
//           <path d="M30 30 L45 35 L40 50 L25 45 Z" fill={colors.secondary} />
//         </g>
//         <g
//           transform={getTransform(3)}
//           style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
//         >
//           <path
//             d="M25 45 L40 50 L30 55 L15 50 Z"
//             fill={colors.accent}
//             opacity={isDark ? '0.7' : '1'}
//           />
//         </g>
//       </svg>
//     </div>
//   );
// };

// const LogoText = ({
//   layout = 'horizontal',
//   isDark = false,
//   showTagline = true,
//   compact = false,
// }) => {
//   const textColor = isDark ? '#A2C4C9' : '#134F5C';
//   const taglineColor = isDark ? '#9ca3af' : '#45818E';

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: layout === 'vertical' ? 'center' : 'flex-start',
//       textAlign: layout === 'vertical' ? 'center' : 'left',
//     },
//     name: {
//       fontSize: compact ? '1.5rem' : '2rem',
//       fontWeight: 600,
//       color: textColor,
//       letterSpacing: '2px',
//       lineHeight: 1,
//       marginBottom: '5px',
//     },
//     subtitle: {
//       fontSize: '0.75rem',
//       fontWeight: 400,
//       color: textColor,
//       letterSpacing: '3px',
//       textTransform: 'uppercase',
//       opacity: 0.8,
//     },
//     tagline: {
//       fontSize: '0.65rem',
//       color: taglineColor,
//       fontStyle: 'italic',
//       marginTop: '8px',
//       letterSpacing: '0.5px',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.name}>APEX</div>
//       <div style={styles.subtitle}>FLUENT ENGLISH</div>
//       {showTagline && (
//         <div style={styles.tagline}>Speak American, Shine Globally!</div>
//       )}
//     </div>
//   );
// };

// const ApexLogo = ({
//   type = 'horizontal',
//   size = 60,
//   isDark = false,
//   showTagline = true,
//   animated = true,
//   variant = 'geometric',
// }) => {
//   const containerStyle = {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: type === 'compact' ? '12px' : '20px',
//     flexDirection: type === 'vertical' ? 'column' : 'row',
//   };

//   if (type === 'symbol-only') {
//     return (
//       <LogoSymbol
//         size={size}
//         isDark={isDark}
//         animated={animated}
//         variant={variant}
//       />
//     );
//   }

//   return (
//     <div style={containerStyle}>
//       <LogoSymbol
//         size={type === 'compact' ? 40 : size}
//         isDark={isDark}
//         animated={animated}
//         variant={variant}
//       />
//       <LogoText
//         layout={type}
//         isDark={isDark}
//         showTagline={showTagline}
//         compact={type === 'compact'}
//       />
//     </div>
//   );
// };

// ============ HEADER COMPONENT ============
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('Ukr');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'Ukr' ? 'Am' : 'Ukr');
  };

  const menuItems = [
    { label: 'Головна', href: '/' },
    { label: 'Лексичний тренажер', href: '/trainer' },
    { label: 'Онлайн заняття', href: '/lessons' },
    { label: 'Профіль', href: '/profile' },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: white;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          box-shadow: 0 2px 20px rgba(19, 79, 92, 0.1);
          border-bottom: 1px solid rgba(19, 79, 92, 0.1);
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: opacity 0.3s ease;
        }

        .logo-link:hover {
          opacity: 0.85;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-link {
          color: #134F5C;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          position: relative;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #45818E;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #134F5C, #45818E);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #45818E;
          font-weight: 600;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1.5px solid #134F5C;
          color: #134F5C;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .lang-toggle:hover {
          background: #134F5C;
          color: white;
        }

        .lang-toggle svg {
          width: 16px;
          height: 16px;
        }

        .register-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #134F5C, #45818E);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(19, 79, 92, 0.2);
        }

        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(19, 79, 92, 0.3);
        }

        .register-btn svg {
          width: 18px;
          height: 18px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #134F5C;
          transition: color 0.3s ease;
        }

        .mobile-menu-btn:hover {
          color: #45818E;
        }

        .mobile-nav {
          display: none;
          position: fixed;
          top: 73px;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid rgba(19, 79, 92, 0.1);
          box-shadow: 0 4px 20px rgba(19, 79, 92, 0.1);
          max-height: calc(100vh - 73px);
          overflow-y: auto;
        }

        .mobile-nav.open {
          display: block;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-content {
          padding: 24px;
        }

        .mobile-menu-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 24px;
        }

        .mobile-nav-link {
          color: #134F5C;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          padding: 14px 16px;
          display: block;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: rgba(19, 79, 92, 0.08);
          color: #45818E;
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid rgba(19, 79, 92, 0.1);
        }

        .mobile-actions .lang-toggle,
        .mobile-actions .register-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .header-container {
            padding: 14px 20px;
          }

          .header-actions {
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 12px 16px;
          }

          .register-btn span {
            display: none;
          }

          .register-btn {
            padding: 10px 12px;
          }
        }

        .demo-content {
          margin-top: 73px;
          padding: 60px 20px;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
        }

        .demo-section {
          margin-bottom: 80px;
        }

        .demo-section h2 {
          color: #134F5C;
          margin-bottom: 20px;
          font-size: 2rem;
        }

        .demo-section p {
          color: #45818E;
          line-height: 1.8;
          font-size: 1.1rem;
        }
      `}</style>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="/" className="logo-link">
            <ApexLogo
              type="horizontal"
              size={45}
              showTagline={false}
              animated={true}
              variant="flowing"
            />
          </a>
          {/* <ApexLogo
            type="horizontal" // horizontal | vertical | compact | symbol-only
            size={60} // число (px)
            isDark={false} // boolean
            showTagline={true} // boolean
            animated={true} // boolean
            variant="flowing" // geometric | flowing
            className="my-logo m-8" // string
          /> */}

          <nav className="desktop-nav">
            <ul className="nav-menu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`nav-link ${index === 0 ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="header-actions">
              <button className="lang-toggle" onClick={toggleLanguage}>
                <Globe />
                <span>{language}</span>
              </button>

              <a href="/register" className="register-btn">
                <User />
                <span>Реєстрація</span>
              </a>
            </div>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* <div className="header-actions">
              <button className="lang-toggle" onClick={toggleLanguage}>
                <Globe />
                <span>{language}</span>
              </button> */}

            {/* <a href="/register" className="register-btn">
                <User />
                <span>Реєстрація</span>
              </a>
            </div> */}

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-menu-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${index === 0 ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <div className="demo-content">
        <div className="demo-section">
          <h2>Головна сторінка</h2>
          <p>
            Ласкаво просимо до APEX FLUENT ENGLISH - вашої онлайн-платформи для
            вивчення американської англійської мови. Спробуйте прокрутити
            сторінку вниз, щоб побачити, як змінюється хедер.
          </p>
        </div>

        <div className="demo-section">
          <h2>Адаптивний дизайн</h2>
          <p>
            Змініть розмір вікна браузера, щоб побачити адаптивну версію хедера.
            На планшетах та мобільних пристроях з'являється бургер-меню.
          </p>
        </div>

        <div className="demo-section">
          <h2>Можливості хедера</h2>
          <p>
            ✓ Анімований логотип з hover-ефектом
            <br />
            ✓ Адаптивне меню з плавною анімацією
            <br />
            ✓ Перемикач мови (Am/Ukr)
            <br />
            ✓ Кнопка реєстрації
            <br />
            ✓ Зміна стилю при скролі
            <br />✓ Бургер-меню для мобільних пристроїв
          </p>
        </div>

        <div className="demo-section">
          <h2>Контент для демонстрації скролу</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        <div className="demo-section">
          <h2>Більше контенту</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
