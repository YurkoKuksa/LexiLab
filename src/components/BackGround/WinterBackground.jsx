// backgrounds/WinterBackground.jsx
export const WinterBackground = ({ children }) => {
  // ... логіка сніжинок
  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      {/* сніжинки */}
      {children}
    </div>
  );
};
