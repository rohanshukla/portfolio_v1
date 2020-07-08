import React, { Component } from "react"
import styled from "styled-components"
import { Burger } from "./"

const Container = styled.nav`
    width: 100%;
    height: 75px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: ${({ visible }) => visible ? '0' : '-75px'};
    z-index: 20;
    transition: top 0.5s;
    .logo {

    }
`

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
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
                <div>

                </div>
                <Burger />
            </Container>
        )
    }
}

export default Menu