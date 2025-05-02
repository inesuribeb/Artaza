import { createContext, useState, useContext } from 'react';

const HeaderStyleContext = createContext();

export function HeaderStyleProvider({ children }) {
  const [headerClassName, setHeaderClassName] = useState('');

  return (
    <HeaderStyleContext.Provider value={{ headerClassName, setHeaderClassName }}>
      {children}
    </HeaderStyleContext.Provider>
  );
}

export function useHeaderStyle() {
  return useContext(HeaderStyleContext);
}