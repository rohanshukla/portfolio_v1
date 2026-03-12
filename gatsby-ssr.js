import React from 'react';
import { wrapRootElement as wrap } from './src/root-wrapper';

export const wrapRootElement = wrap;

const setThemeScript = `
  (function() {
    try {
      var theme = sessionStorage.getItem('theme');
      if (theme === 'light') {
        document.documentElement.dataset.theme = 'light';
      } else {
        document.documentElement.dataset.theme = 'dark';
      }
    } catch (e) {
      // ignored
    }
  })();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme"
      dangerouslySetInnerHTML={{ __html: setThemeScript }}
    />,
  ]);
};
