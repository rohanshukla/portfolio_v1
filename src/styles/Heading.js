import styled from 'styled-components';
import { respondTo } from './_respondTo';

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.secondarySlate};
  margin-bottom: ${({ margin }) => (margin ? margin : '30px')};
  &:after {
    display: inline-block;
    content: '';
    border-top: 1px solid ${({ theme }) => theme.colors.lightestBackground};
    width: 9rem;
    margin: auto 1rem;
    transform: translateY(-0.5rem);
    ${respondTo.md`
            width: 21rem;
        `}
  }
`;

export default Heading;
