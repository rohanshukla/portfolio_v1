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
        font-family: ${({ theme }) => theme.fonts.main}
    }
`

export default GlobalStyles