import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as Theme, lightTheme as LightTheme } from '../styles/theme';
import { getTheme } from '../utils';

export const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState(Theme);

  useEffect(() => {
    const storedTheme = getTheme();
    const newTheme = storedTheme === 'light' ? LightTheme : Theme;
    setTheme(newTheme);
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
