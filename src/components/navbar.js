import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '../config';
import { respondTo } from '../styles/_respondTo';
import { getTheme } from '../utils';

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  z-index: 19;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  justify-content: center;
  align-items: center;

  ${respondTo.sm`
        width: 50%;
    `}

  ${respondTo.md`
        flex-flow: row nowrap;
        align-items: center;
        background-color: transparent;
        position: static;
        top: auto;
        right: auto;
        height: auto;
        width: auto;

        z-index: auto;
        transform: none;
        transition: none;
    `}

    li {
    margin: 15px 0;
    color: ${({ theme }) => theme.colors.secondarySlate};
    ${respondTo.md`
            padding: 0 20px;
            &:hover {
            color: ${({ theme }) => theme.colors.accent};
            }
        `}
  }
`;

const LinkItems = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  ${respondTo.lg`
        font-size: ${({ theme }) => theme.fontSizes.md};
    `}
`;
const Switch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  background-color: ${({ theme, isOn }) =>
    isOn ? theme.colors.accent : theme.colors.lightBackground};
  border-radius: 15px;
  width: 40px;
  height: 20px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 15px 0; // Added margin to match the gap of menu items
`;

const Toggle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondarySlate};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ isOn }) => (isOn ? 'calc(100% - 18px)' : '2px')}; // Adjusted to center the toggle
  transition: left 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Navbar = ({ open, setOpen }) => {
  const [isOn, setIsOn] = useState(() => {
    const savedTheme = getTheme();
    return savedTheme ? false : true;
  });

  useEffect(() => {
    if (!isOn) {
      sessionStorage.setItem('theme', 'light');
    } else {
      sessionStorage.removeItem('theme');
    }
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);
    setTimeout(() => {
      window.location.reload();
    }, 300); // Delay to allow the toggle animation to complete
  };

  return (
    <>
      <Container open={open}>
        {navLinks.map((data, index) => {
          return (
            <li key={index}>
              <LinkItems to={data.url} onClick={() => setOpen(!open)}>
                {data.name}
              </LinkItems>
            </li>
          );
        })}
        <Switch isOn={isOn} onClick={handleToggle}>
          <Toggle isOn={isOn} />
        </Switch>
      </Container>
    </>
  );
};

export default Navbar;
