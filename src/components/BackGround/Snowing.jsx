import React, { useEffect, useState } from 'react';

const Snowing = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Створюємо 50 сніжинок з випадковими параметрами
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      fontSize: 10 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      {/* Сніжинки */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute animate-fall"
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

      {/* Контент */}
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
            Зимова казка
          </h1>
          <p className="text-2xl opacity-90 drop-shadow-md">
            Сніжинки падають тихо з неба
          </p>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Snowing;
