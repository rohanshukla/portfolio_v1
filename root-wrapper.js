import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"
import GlobalStyles from "./src/styles/global-style"

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
    )
}