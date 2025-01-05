import React from 'react';
import styled, { keyframes } from 'styled-components';
import { respondTo } from '../styles/_respondTo';
import { FormattedIcon } from './icons';
import Heading from '../styles/Heading';

const Container = styled.section`
  padding: 20px 0;
  min-height: 100vh;
  ${respondTo.md`
    padding: 40px 0;
  `}
`;

const ProjectGrid = styled.div`
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
`;

const hoverEffect = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  &:hover {
    animation: ${hoverEffect} 0.6s ease-in-out infinite;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  svg {
    width: 38px;
    height: auto;
  }
`;

const IconLinks = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    a {
      text-decoration: none;
      svg {
        width: 23px;
        height: auto;
        color: ${({ theme }) => theme.colors.primarySlate};
        margin: 0 10px;
        transition:
          color 0.3s,
          transform 0.3s;
        &:hover {
          color: ${({ theme }) => theme.colors.accent};
          transform: scale(1.1);
        }
      }
    }
  }
`;

const ProjectTitle = styled.h5`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondarySlate};
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ProjectDescription = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.primarySlate};
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectTechList = styled.div`
  margin-top: 25px;
  span {
    margin: 0 10px 0 0;
    font-size: 13.5px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.slate};
  }
`;

const Project = ({ data }) => (
  <Container id="projects">
    <Heading>Projects</Heading>
    <ProjectGrid>
      {data.map(({ node: { frontmatter, html } }, index) => {
        const { title, github, url, tech } = frontmatter;
        return (
          <ProjectCard key={index}>
            <IconLinks>
              <FormattedIcon name="Folder" />
              <div>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <FormattedIcon name="GitHub" />
                  </a>
                )}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <FormattedIcon name="External" />
                  </a>
                )}
              </div>
            </IconLinks>
            <div>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <ProjectTechList>
              {tech.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </ProjectTechList>
          </ProjectCard>
        );
      })}
    </ProjectGrid>
  </Container>
);

export default Project;
