import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Layout = ({ children }) => {
    return (
        <Container id="root">
            {children}
        </Container>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;