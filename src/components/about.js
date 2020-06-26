import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { respondTo } from "../styles/_respondTo"

const Container = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 20px;
    ${respondTo.md`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    `}
`

const AboutContainer = styled.div`
    h2 {
        color: ${({ theme }) => theme.colors.lightestSlate};
        margin-bottom: 30px;
    }
`

const Content = styled.div`
    p {
        font-size: 16px;
        line-height: 1.5;
        &:nth-child(2) {
            margin: 10px 0;
        }
    }

    ${respondTo.sm`
        width: 70%;
    `}
    ${respondTo.md`
        width: 100%;
    `}
`

const Image = styled(Img)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${respondTo.sm`
        width: 350px;
        height: 350px;
    `}
`

const Skills = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 210px));
    overflow: hidden;
    list-style-position: inside;
    list-style-type: none;
`

const List = styled.li`
    margin: 3px 0;
    &:before {
        content: '☆'; /* ⚝ ✩ ✭ */
        line-height: 12px;
        margin-right: 10px;
        color: ${({ theme }) => theme.colors.accent};
  }
`

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    return (
        <Container>
            <AboutContainer>
                <h2>{frontmatter.title}</h2>
                <Content dangerouslySetInnerHTML={{ __html: html }} />
                <Skills>
                    {
                        frontmatter.skills.map((skill, index) => {
                            return (
                                <List key={index}>{skill}</List>
                            )
                        })
                    }
                </Skills>
            </AboutContainer>
            <Image fluid={frontmatter.avatar.childImageSharp.fluid} alt="Avatar" />
        </Container>
    )
}

export default About