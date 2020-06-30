import { css } from 'styled-components';

const InlineLink = css`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.2em;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transition};
  }
`;

export default InlineLink;
