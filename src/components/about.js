import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { respondTo } from '../styles/_respondTo';
import InlineLink from '../styles/inlineLink';
import Heading from '../styles/Heading';

const Container = styled.section`
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
`;

const AboutContainer = styled.div``;

const Content = styled.div`
  padding-bottom: 10px;
  p {
    font-size: 16px;
    line-height: 1.5;
    &:nth-child(2) {
      margin: 10px 0;
    }
    &:nth-child(3) {
      margin: 10px 0;
    }
    a {
      ${InlineLink}
    }
  }

  ${respondTo.sm`
        width: 100%;
    `}
`;

const Image = styled(GatsbyImage)`
  width: 80%;
  height: auto;
  border-radius: 50%;
  margin-top: 30px;
  ${respondTo.sm`
        margin-top: 0;
        width: 350px;
        height: 350px;
    `}
`;

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 200px));
  overflow: hidden;
  list-style-position: inside;
  list-style-type: none;
  ${respondTo.sm`
        grid-template-columns: repeat(3, minmax(150px, 200px));
    `}
`;

const List = styled.li`
  margin: 3px 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  &:before {
    content: '☆'; /* ⚝ ✩ ✭ */
    line-height: 12px;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const image = getImage(frontmatter.avatar);
  return (
    <Container id="about">
      <AboutContainer>
        <Heading>{frontmatter.title}</Heading>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <Skills>
          {frontmatter.skills.map((skill, index) => {
            return <List key={index}>{skill}</List>;
          })}
        </Skills>
      </AboutContainer>
      <Image image={image} alt="Avatar" />
    </Container>
  );
};

export default About;
