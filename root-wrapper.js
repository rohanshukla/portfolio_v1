import React from 'react';
import { ThemeToggle } from './src/components/themeToggle';

export const wrapRootElement = ({ element }) => {
  return <ThemeToggle>{element}</ThemeToggle>;
};
