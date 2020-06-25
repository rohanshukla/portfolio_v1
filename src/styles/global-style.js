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
        font-family: ${({ theme }) => theme.fonts.main}
    }
`

export default GlobalStyles