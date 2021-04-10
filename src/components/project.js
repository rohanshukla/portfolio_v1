import React from "react"
import styled from "styled-components"
import { respondTo } from "../styles/_respondTo"
import { FormattedIcon } from "./icons"
import Heading from "../styles/Heading"

const Container = styled.section`
    padding: 20px 0;
    min-height: 100vh;
    ${respondTo.md`

    `}
`

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 25px;
    ${respondTo.sm`
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
    `}
    ${respondTo.md`
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
    `}
`

const ProjectItem = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.lightBackground};
    color: ${({ theme }) => theme.colors.accent};
    border-radius: 3px;
    text-decoration: none;
    svg {
        width: 38px;
        height: auto;
    }
`

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        a {
            text-decoration: none;
            svg {
            width: 18px;
            height: auto;
            color: ${({ theme }) => theme.colors.lightSlate};
            margin: 0 10px;
            :hover {
                color: ${({ theme }) => theme.colors.accent};
                }
            }
        }
    }
`

const StyledProjectName = styled.h5`
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.lightestSlate};
`;

const StyledProjectDescription = styled.div`
    font-size: 14px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.lightSlate};
    a {
        
    }
`;

const ProjectTech = styled.div`
    margin: 25px 0;
    span {
        margin: 0 10px 0 0;
        font-size: 13.5px;   
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.colors.slate};
    }
`

const Project = ({ data }) => {
    return (
        <Container id="projects">
            <Heading>Projects</Heading>
            <ProjectContainer>
                {
                    data.map(({ node: { frontmatter, html } }, index) => {
                        const { title, github, url, tech } = frontmatter;
                        return (
                            <ProjectItem key={index}>
                                <Icons>
                                    <FormattedIcon name="Folder" />
                                    <div>
                                        {github && <a href={github}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer">
                                            <FormattedIcon name="GitHub" />
                                        </a>}
                                        {url && <a href={url}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer">
                                            <FormattedIcon name="External" />
                                        </a>}
                                    </div>
                                </Icons>
                                <StyledProjectName>{title}</StyledProjectName>
                                <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                                <ProjectTech>
                                    {
                                        tech.map((data, index) => {
                                            return <span key={index}>{data}</span>
                                        })
                                    }
                                </ProjectTech>
                            </ProjectItem>
                        )
                    })
                }
            </ProjectContainer>
        </Container>
    )
}

export default Project