import React from 'react';
import { ThemeToggle } from './components/themeToggle';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeToggle>
      {element}
    </ThemeToggle>
  );
};
