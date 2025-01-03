export const hex2rgba = (hex, alpha = 1) => {
  const match = hex.match(/\w\w/g);
  if (!match || match.length !== 3) {
    throw new Error('Invalid hex color');
  }
  const [r, g, b] = match.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const getTheme = () => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem('theme');
  }
  return null;
};
