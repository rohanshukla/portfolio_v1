import React, { useState } from 'react';
import styled from 'styled-components';
import { respondTo } from '../styles/_respondTo';
import { Navbar } from './';

const Container = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    align-self: flex-end;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      width: ${({ open }) => (open ? '2rem' : '1.6rem')};
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      width: ${({ open }) => (open ? '2rem' : '1.2rem')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  ${respondTo.md`
        display: none;
    `}
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Container>
      <Navbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
