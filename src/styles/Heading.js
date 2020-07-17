import styled from "styled-components"
import { respondTo } from "./_respondTo"

const Heading = styled.h2`
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin-bottom: ${({ margin }) => margin ? margin : '30px'};
    &:after {
        display: inline-block;
        content: "";
        border-top: 1px solid ${({ theme }) => theme.colors.lightestBackground};
        width: 8rem;
        margin: auto 1rem;
        transform: translateY(-0.5rem);
        ${respondTo.md`
            width: 16rem;
        `}
    }
`

export default Heading