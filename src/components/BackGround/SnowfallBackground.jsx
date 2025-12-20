const { useEffect, useState } = require('react');

const SnowfallBackground = ({ children, theme = 'winter' }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
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

  // Різні теми фонів
  // const themes = {
  //   winter: 'from-slate-900 via-blue-900 to-slate-800',
  //   christmas: 'from-red-950 via-green-950 to-slate-900',
  //   spring: 'from-pink-100 via-purple-100 to-blue-100',
  //   autumn: 'from-orange-900 via-amber-800 to-yellow-900',
  //   summer: 'from-sky-400 via-blue-300 to-cyan-200',
  //   night: 'from-indigo-950 via-purple-950 to-slate-950',
  // };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      {/* Сніжинки */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="fixed animate-fall pointer-events-none z-0"
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

      {/* Контент користувача */}
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
export default SnowfallBackground;

// const SnowfallBackground = ({ children, theme = 'winter' }) => {
//   const [snowflakes, setSnowflakes] = useState([]);

//   useEffect(() => {
//     const flakes = Array.from({ length: 50 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       animationDuration: 5 + Math.random() * 10,
//       animationDelay: Math.random() * 5,
//       fontSize: 10 + Math.random() * 20,
//       opacity: 0.3 + Math.random() * 0.7,
//     }));
//     setSnowflakes(flakes);
//   }, []);

//   // Різні теми фонів
//   const themes = {
//     winter: 'from-slate-900 via-blue-900 to-slate-800',
//     christmas: 'from-red-950 via-green-950 to-slate-900',
//     spring: 'from-pink-100 via-purple-100 to-blue-100',
//     autumn: 'from-orange-900 via-amber-800 to-yellow-900',
//     summer: 'from-sky-400 via-blue-300 to-cyan-200',
//     night: 'from-indigo-950 via-purple-950 to-slate-950',
//   };

//   return (
//     <div
//       className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-b ${
//         themes[theme] || themes.winter
//       }`}
//     >
//       {snowflakes.map(flake => (
//         <div
//           key={flake.id}
//           className="fixed animate-fall pointer-events-none z-0"
//           style={{
//             left: `${flake.left}%`,
//             animationDuration: `${flake.animationDuration}s`,
//             animationDelay: `${flake.animationDelay}s`,
//             fontSize: `${flake.fontSize}px`,
//             opacity: flake.opacity,
//             top: '-5%',
//           }}
//         >
//           ❄
//         </div>
//       ))}

//       <div className="relative z-10">{children}</div>

//       <style jsx>{`
//         @keyframes fall {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           100% {
//             transform: translateY(100vh) rotate(360deg);
//           }
//         }
//         .animate-fall {
//           animation: fall linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };
// export default SnowfallBackground;
