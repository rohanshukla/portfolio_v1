import { hex2rgba } from "../utils"

const ACCENT = '#fed426'; /* 05dfd7 fed426 */
const DARK_BG = '#010a17';
const BG = '#09182e';

export default {
    fonts: {
        main: "Lato, sans-serif"
    },
    colors: {
        darkBG: DARK_BG,
        background: BG,
        lightBackground: '#112240',
        lightestBackground: '#303C55',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        white: '#e6f1ff',
        accent: ACCENT,
        transAccent: hex2rgba(ACCENT, 0.07),
        shadowBackground: hex2rgba(DARK_BG, 0.7),
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
}