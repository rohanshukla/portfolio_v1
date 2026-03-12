import React from 'react';
import { ThemeToggle } from './components/themeToggle';
import GlobalStyles from './styles/global-style';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeToggle>
      <GlobalStyles />
      {element}
    </ThemeToggle>
  );
};
