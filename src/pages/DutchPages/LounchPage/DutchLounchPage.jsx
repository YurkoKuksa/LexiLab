import React, { useState, useEffect } from 'react';
import { ReactComponent as NlIcon } from '../../../assets/svg/nl.svg';
import { ReactComponent as HetBoek } from '../../../assets/svg/boek.svg';
import { NavLink } from 'react-router-dom';

const DutchLearningDonate = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [countdown, setCountdown] = useState(10);

  const dutchWords = [
    'hallo',
    'dankjewel',
    'goedemorgen',
    'tot ziens',
    'alsjeblieft',
    'ja',
    'nee',
    'fiets',
    'kaas',
    'gezellig',
    'lekker',
    'mooi',
    'water',
    'brood',
    'huis',
    'zon',
    'regen',
    'vrienden',
    'liefde',
  ];
  const motivationalPhrases = React.useMemo(
    () => [
      { text: 'Elke stap brengt je dichter bij je doel!', icon: false },
      { text: 'Вивчення мови — це подорож, не гонка!', icon: false },
      { text: 'Je Nederlands wordt elke dag beter!', icon: false },
      { text: 'Маленькі кроки ведуть до великих результатів!', icon: false },
      { text: 'Blijf oefenen, succes komt vanzelf!', icon: false },
      { text: 'Кожне нове слово — це перемога!', icon: false },
      { text: 'Taal leren is jezelf verrijken!', icon: true },
      { text: 'Ти можеш більше, ніж думаєш!', icon: false },
      { text: 'Nederlands is jouw nieuwe superkracht!', icon: false },
      { text: 'Не зупиняйся, ти на правильному шляху!', icon: false },
    ],
    []
  );

  useEffect(() => {
    const current = motivationalPhrases[currentPhraseIndex];
    const fullText = current.text;

    let charIndex = 0;
    let typingInterval;

    if (isTyping) {
      typingInterval = setInterval(() => {
        charIndex++;
        setDisplayedText(fullText.slice(0, charIndex));

        if (charIndex >= fullText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);

          setTimeout(() => {
            setDisplayedText('');
            setCurrentPhraseIndex(
              prev => (prev + 1) % motivationalPhrases.length
            );
            setIsTyping(true);
          }, 1500);
        }
      }, 80);
    }

    return () => typingInterval && clearInterval(typingInterval);
  }, [currentPhraseIndex, isTyping, motivationalPhrases]);

  const current = motivationalPhrases[currentPhraseIndex];

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      window.location.href = '/LexiLab/nl';
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-orange-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dutch words background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dutchWords.map((word, index) => (
          <div
            key={index}
            className="absolute text-4xl font-bold opacity-5 text-orange-600"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
              animation: `float ${15 + (index % 5) * 3}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${((index * 15) % 60) - 30}deg)`,
            }}
          >
            {word}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(5deg);
          }
          50% {
            transform: translateY(-50px) translateX(-20px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) translateX(30px) rotate(3deg);
          }
        }

        @keyframes pulse-shadow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.4),
                        0 0 40px rgba(249, 115, 22, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.8),
                        0 0 80px rgba(249, 115, 22, 0.4),
                        0 0 120px rgba(249, 115, 22, 0.2);
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes countdown-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .pulse-button {
          animation: pulse-shadow 2s ease-in-out infinite;
        }

        .cursor {
          animation: blink 1s step-end infinite;
        }

        .countdown-number {
          animation: countdown-pulse 1s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative z-10 border-4 border-orange-500">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Якщо хочеш допомогти зібрати на книгу A2, натисни тут:
        </h1>

        {/* Donate Button */}
        <button
          onClick={() =>
            window.open('https://send.monobank.ua/jar/example', '_blank')
          }
          className="pulse-button w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl text-xl mb-6 hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 active:scale-95"
        >
          💝 Донат
        </button>

        {/* Countdown */}
        <div
          className="flex items-center justify-center mb-6"
          style={{ height: '144px' }}
        >
          <div className="countdown-number text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
            {countdown}
          </div>
        </div>

        {/* Materials Button */}
        <NavLink
          to="/nl"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-xl mb-8 hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3 whitespace-nowrap"
        >
          <HetBoek className="w-10 h-10" />
          <span>До навчальних матеріалів</span>
        </NavLink>

        {/* Typing Animation */}
        <div className="min-h-[60px] flex items-center justify-center">
          <p className="text-lg font-semibold text-gray-800 text-center flex items-center justify-center">
            {displayedText}

            {/* Курсор — тільки під час тайпінгу */}
            {isTyping && (
              <span className="cursor inline-block w-0.5 h-5 bg-orange-600 ml-1 align-middle"></span>
            )}

            {/* SVG — тільки після завершення тайпінгу і якщо потрібно */}
            {!isTyping && current.icon && (
              <NlIcon
                style={{
                  width: 20,
                  marginLeft: 8,
                  verticalAlign: 'middle',
                  display: 'inline-block',
                }}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DutchLearningDonate;
