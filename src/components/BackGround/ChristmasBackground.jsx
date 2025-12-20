import React, { useEffect, useState } from 'react';

const ChristmasBackground = ({ children }) => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [lights, setLights] = useState([]);

  useEffect(() => {
    // Створюємо сніжинки
    const flakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      fontSize: 10 + Math.random() * 20,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setSnowflakes(flakes);

    // Створюємо різдвяні вогники
    const lightColors = [
      '#ff0000',
      '#00ff00',
      '#ffff00',
      '#0000ff',
      '#ff00ff',
      '#00ffff',
      '#ffa500',
    ];
    const lightElements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: lightColors[Math.floor(Math.random() * lightColors.length)],
      animationDelay: Math.random() * 2,
      size: 8 + Math.random() * 12,
    }));
    setLights(lightElements);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-red-950 via-green-950 to-slate-900">
      {/* Різдвяні вогники на заднім фоні */}
      {lights.map(light => (
        <div
          key={light.id}
          className="absolute rounded-full animate-twinkle blur-sm pointer-events-none"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            backgroundColor: light.color,
            animationDelay: `${light.animationDelay}s`,
            boxShadow: `0 0 20px ${light.color}`,
          }}
        />
      ))}

      {/* Сніжинки */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute animate-fall pointer-events-none"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.fontSize}px`,
            opacity: flake.opacity,
            top: '-5%',
          }}
        >
          ❄
        </div>
      ))}

      {/* Декоративні зірки по кутах */}
      <div className="absolute top-10 left-10 text-yellow-300 text-6xl animate-pulse pointer-events-none">
        ⭐
      </div>
      <div
        className="absolute top-10 right-10 text-yellow-300 text-5xl animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        ✨
      </div>
      <div
        className="absolute top-1/3 left-5 text-yellow-300 text-4xl animate-pulse pointer-events-none"
        style={{ animationDelay: '0.5s' }}
      >
        ⭐
      </div>
      <div
        className="absolute top-1/3 right-5 text-yellow-300 text-4xl animate-pulse pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-32 left-10 text-yellow-300 text-5xl animate-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      >
        ⭐
      </div>
      <div
        className="absolute bottom-32 right-10 text-yellow-300 text-5xl animate-pulse pointer-events-none"
        style={{ animationDelay: '0.7s' }}
      >
        ✨
      </div>

      {/* Ялинки в кутах знизу */}
      <div className="absolute bottom-0 left-10 text-center pointer-events-none">
        <div className="text-yellow-400 text-4xl mb-1 animate-pulse">⭐</div>
        <div className="text-green-600 text-7xl">🎄</div>
        <div className="flex justify-center gap-2 mt-1">
          <span className="text-3xl">🎁</span>
          <span className="text-3xl">🎁</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-10 text-center pointer-events-none">
        <div
          className="text-yellow-400 text-4xl mb-1 animate-pulse"
          style={{ animationDelay: '1s' }}
        >
          ⭐
        </div>
        <div className="text-green-600 text-7xl">🎄</div>
        <div className="flex justify-center gap-2 mt-1">
          <span className="text-3xl">🎁</span>
          <span className="text-3xl">🎁</span>
        </div>
      </div>

      {/* Сніговик зліва */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-7xl pointer-events-none">
        ⛄
      </div>

      {/* Санта справа */}
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-7xl pointer-events-none">
        🎅
      </div>

      {/* Контент користувача - завжди на передньому плані */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChristmasBackground;

// Приклад використання
// const App = () => {
//   return (
//     <ChristmasBackground>
//       {/* Ваш контент тут */}
//       <div className="flex items-center justify-center min-h-screen p-8">
//         <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl p-12 max-w-2xl">
//           <h1 className="text-5xl font-bold mb-6 text-red-700 text-center">
//             Веселого Різдва! 🎅
//           </h1>
//           <p className="text-xl text-gray-700 text-center mb-4">
//             Це приклад вашого контенту
//           </p>
//           <p className="text-gray-600 text-center">
//             Замініть цей блок на будь-який ваш компонент або контент. Різдвяні
//             анімації будуть на фоні, не заважаючи вашому контенту.
//           </p>
//           <div className="mt-8 flex justify-center gap-4">
//             <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
//               Кнопка 1
//             </button>
//             <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
//               Кнопка 2
//             </button>
//           </div>
//         </div>
//       </div>
//     </ChristmasBackground>
//   );
// };

// export default App;
