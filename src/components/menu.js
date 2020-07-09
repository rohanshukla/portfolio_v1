import React, { Component } from "react"
import styled from "styled-components"
import { Burger } from "./"
import Logo from "../../static/logo.svg"

const Container = styled.nav`
    width: 90%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: ${({ visible }) => visible ? '0' : '-75px'};
    z-index: 20;
    transition: top 0.5s;
`
const LogoImage = styled.img`
    height: 35px;
`

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: 0,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        this.setState({
            prevScrollpos: window.pageYOffset
        }, () => {
            window.addEventListener("scroll", this.handleScroll);
        });
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <Container visible={this.state.visible}>
                <LogoImage src={Logo} alt="Logo" />
                <Burger />
            </Container>
        )
    }
}

export default Menu