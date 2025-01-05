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
  width: 55px;
  height: 25px;
  position: relative;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 15px 0;
  ${respondTo.md`
        margin: 15px 0 15px 20px;
    `}

  &:hover {
    background-color: ${({ theme, isOn }) =>
      isOn ? theme.colors.accentHover : theme.colors.lightBackgroundHover};
    transform: scale(1.05);
  }
`;

const Toggle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.secondarySlate};
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${({ isOn }) => (isOn ? 'calc(100% - 22.5px)' : '2.5px')};
  transition: left 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Label = styled.span`
  font-size: 10px;
  color: ${({ theme, isOn }) =>
    isOn ? theme.colors.lightBackground : theme.colors.secondarySlate};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ isOn }) => (isOn ? 'left: 5px;' : 'right: 5px;')}
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
          <Label isOn={isOn}>
            <strong>{isOn ? 'Dark' : 'Light'}</strong>
          </Label>
        </Switch>
      </Container>
    </>
  );
};

export default Navbar;
