// BackgroundContext.jsx
import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState('winter');

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
