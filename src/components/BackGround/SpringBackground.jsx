// backgrounds/SpringBackground.jsx
export const SpringBackground = ({ children }) => {
  // ... логіка квітів/метеликів
  return (
    <div className="bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100">
      {/* анімації */}
      {children}
    </div>
  );
};
