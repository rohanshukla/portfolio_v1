import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        
    }
    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.slate};
        line-height: 1.3;
        font-family: ${({ theme }) => theme.fonts.main};

        /* background: repeating-linear-gradient(to right, #010a17, #010a17 5px, #09182e 5px, #09182e 20px); */
    }

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        vertical-align: middle;
    }
`

export default GlobalStyles