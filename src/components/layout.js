import React, { useEffect } from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "../../src/styles/global-style"

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Layout = ({ children, location }) => {
    useEffect(() => {
        if (location.hash) {
            // location.hash without the '#'
            const id = location.hash.substring(1);
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }
    }, [location.hash]);

    return (
        <Container id="root">
            <GlobalStyles />
            {children}
        </Container>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;