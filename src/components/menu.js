import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Burger } from './';
import Logo from '../../static/logo';
import { lightTheme, theme } from '../styles/theme';
import { getTheme } from '../utils';

const Container = styled.nav`
  width: 90%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: ${({ visible }) => (visible ? '0' : '-75px')};
  z-index: 20;
  transition: top 0.5s;
`;
const LinkItems = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: 0,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    this.setState(
      {
        prevScrollpos: window.scrollY,
      },
      () => {
        window.addEventListener('scroll', this.handleScroll);
      },
    );
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.scrollY;
    const visible = prevScrollpos > currentScrollPos || currentScrollPos === 0;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <Container visible={this.state.visible}>
        <LinkItems to="/">
          <Logo
            fillColor={
              getTheme() === 'light'
                ? lightTheme.colors.accent
                : theme.colors.accent
            }
          />
        </LinkItems>
        <Burger />
      </Container>
    );
  }
}

export default Menu;
