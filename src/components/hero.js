import React from "react"
import styled from "styled-components"
import { respondTo } from "../styles/_respondTo"

import { Lottie } from "./"
import DeveloperLottie from "../lottie/developer.json"

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
`

const Header = styled.header`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    ${respondTo.sm`
        grid-template-columns: repeat(2, 1fr);
    `}
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </Content>
                <Lottie animationData={DeveloperLottie} />
            </Header>
        </Container>
    )
}

export default Hero