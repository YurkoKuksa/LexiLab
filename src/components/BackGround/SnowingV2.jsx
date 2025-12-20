import React, { useEffect, useState } from 'react';

const Snowing = ({ children }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 15 + Math.random() * 25,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      {/* Сніжинки */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="fixed animate-fall pointer-events-none z-0 text-blue-200"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            top: '-5%',
            filter: 'drop-shadow(0 0 3px #7dd3fc)',
          }}
        >
          ❄
        </div>
      ))}

      {/* Контент */}
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

        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Snowing;
