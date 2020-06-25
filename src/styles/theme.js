import { hex2rgba } from "../utils"

const ACCENT = '#64ffda';
const DARK_BG = '#020c1b';
const BG = '#0a192f';

export default {
    fonts: {
        main: "Lato, sans-serif"
    },
    colors: {
        darkBG: DARK_BG,
        background: BG,
        lightBackground: '#172a45',
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
    }
}