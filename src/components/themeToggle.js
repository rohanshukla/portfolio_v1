import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as Theme, lightTheme as LightTheme } from '../styles/theme';
import { getTheme } from '../utils';

const getInitialTheme = () => {
  // Use the theme from storage in the browser so the first paint matches.
  if (typeof window !== 'undefined') {
    const storedTheme = getTheme();
    return storedTheme === 'light' ? LightTheme : Theme;
  }

  // SSR fallback
  return Theme;
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useIsomorphicLayoutEffect(() => {
    const storedTheme = getTheme();
    const newTheme = storedTheme === 'light' ? LightTheme : Theme;

    if (newTheme !== theme) {
      setTheme(newTheme);
    }

    // Keep <html data-theme="..." /> in sync with the rendered theme,
    // so the pre-rendered (non‑React) styles in gatsby-ssr match too.
    const docTheme = newTheme === LightTheme ? 'light' : 'dark';
    document.documentElement.dataset.theme = docTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
