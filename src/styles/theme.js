import { hex2rgba } from '../utils';

/* const ACCENT = '#FF6F61'; // Coral
const DARK_BG = '#121212'; // Darker Gray
const BG = '#1E1E1E'; // Dark Gray
const LIGHT_BG = '#F5F5F5'; // Light Gray
const LIGHT_ACCENT = '#FFB6C1'; // Light Pink */

const ACCENT = '#04e2e8'; /* 05dfd7 fed426 04e2e8 */
const DARK_BG = '#010a17';
const BG = '#09182e';
const LIGHT_BG = '#f4f4f9';
const LIGHT_ACCENT = '#FF8C42';

const defaultTheme = {
  fonts: {
    main: 'Poppins, Lato, Pacifico, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
};

export const theme = {
  ...defaultTheme,
  colors: {
    darkBG: DARK_BG,
    background: BG,
    lightBackground: '#112240',
    lightestBackground: '#303C55',
    slate: '#9aa3c0',
    primarySlate: '#b8c2de',
    secondarySlate: '#d8e0f8',
    white: '#e6f1ff',
    accent: ACCENT,
    transAccent: hex2rgba(ACCENT, 0.07),
    shadowBackground: hex2rgba(DARK_BG, 0.7),
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    darkBG: LIGHT_BG,
    background: '#ffffff',
    lightBackground: '#f2f2f2',
    lightestBackground: '#dcdcdc',
    slate: '#5a5a5a',
    primarySlate: '#4a4a4a',
    secondarySlate: '#2a2a2a',
    white: '#ffffff',
    accent: LIGHT_ACCENT,
    transAccent: hex2rgba(LIGHT_ACCENT, 0.07),
    shadowBackground: hex2rgba(LIGHT_BG, 0.7),
  },
  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    h3: '32px',
  },
};
