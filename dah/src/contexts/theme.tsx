import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import useDarkMode from '../hooks/useDarkMode';

type Theme = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};
const ThemeContext = createContext<Theme | {}>({});

export const ThemeProvider = ({ children }) => {
  const { dark, setDark } = useDarkMode(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext) as Theme;
  return context;
};
