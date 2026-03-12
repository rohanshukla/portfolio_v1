import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as Theme, lightTheme as LightTheme } from '../styles/theme';
import GlobalStyles from '../styles/global-style';
import { getTheme } from '../utils';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return Theme;
  }

  const storedTheme = getTheme();
  return storedTheme === 'light' ? LightTheme : Theme;
};

export const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Keep state in sync with storage if something else updates it.
    const storedTheme = getTheme();
    const newTheme = storedTheme === 'light' ? LightTheme : Theme;

    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
