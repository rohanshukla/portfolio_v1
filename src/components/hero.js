import React from "react"
import styled from "styled-components"
import { respondTo } from "../styles/_respondTo"

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const Header = styled.header``

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: ${({ theme }) => theme.colors.lightestSlate};
        font-size: 35px;
        margin-top: 5px;
        ${respondTo.sm`
            font-size: 55px;
        `}
        ${respondTo.md`
            font-size: 65px;
        `}
    }
    h2 {
        color: ${({ theme }) => theme.colors.accent};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: normal;
        letter-spacing: 2.2px;
        margin: 5px 0;
        ${respondTo.md`
            font-size: ${({ theme }) => theme.fontSizes.md};
        `}
    }
    h3 {
        font-size: 35px;
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
        font-size: 16px;
        line-height: 1.5;
    }

    ${respondTo.sm`
        width: 70%;
        p {
            font-size: 17.5px;
        }
    `}
    ${respondTo.md`
        width: 50%;
        p {
            font-size: 17.5px;
        }
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