import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --background: #09182e;
        --text: #9aa3c0;
        --font: ${({ theme }) => theme.fonts.main};
    }

    html[data-theme='light'] {
        --background: #ffffff;
        --text: #5a5a5a;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--background);
        color: var(--text);
        /* line-height: 1.3; */
        font-family: var(--font);

        /* background: repeating-linear-gradient(to right, #010a17, #010a17 5px, #09182e 5px, #09182e 20px); */
    }

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        vertical-align: middle;
    }
`;

export default GlobalStyles;
