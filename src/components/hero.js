import React from "react"
import styled from "styled-components"
import { respondTo } from "../styles/_respondTo"

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = styled.header`
    /* display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    ${respondTo.sm`
        grid-template-columns: repeat(2, 1fr);
    `} */
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: ${({ theme }) => theme.colors.lightestSlate};
        font-size: 40px;
        margin-top: 5px;
        ${respondTo.sm`
            font-size: 55px;
        `}
        ${respondTo.md`
            font-size: 65px;
        `}
    }
    h2 {
        color: ${({ theme }) => theme.colors.green};
        font-size: ${({ theme }) => theme.fontSizes.smish};
        letter-spacing: 2.5px;
        margin: 5px 0;
        ${respondTo.md`
            font-size: ${({ theme }) => theme.fontSizes.sm};
        `}
    }
    h3 {
        font-size: 40px;
        ${respondTo.sm`
            font-size: 55px;
        `}
        ${respondTo.md`
            font-size: 65px;
        `}
    }
`
const AboutContainer = styled.div`
    width: 100%;
    p {
        margin-top: 30px;
        font-size: 16.5px;
    }

    ${respondTo.sm`
        width: 70%;
    `}
    ${respondTo.md`
        width: 50%;
    `}
`

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    return (
        <Container>
            <Header>
                <Content>
                    <h2>{frontmatter.title}</h2>
                    <h1>{frontmatter.name}</h1>
                    <h3>{frontmatter.subtitle}</h3>
                    <AboutContainer dangerouslySetInnerHTML={{ __html: html }} />
                </Content>
            </Header>
        </Container>
    )
}

export default Hero