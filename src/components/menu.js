import React from "react"
import styled from "styled-components"
import { Burger } from "./"

const Container = styled.nav`
    width: 100%;
    height: 65px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {

    }
`

const Menu = () => {
    return (
        <Container>
            <div>

            </div>
            <Burger />
        </Container>
    )
}

export default Menu