import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../styles/_respondTo';
import { email } from '../config';

const Container = styled.div`
  padding: 5px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Header = styled.header``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.3;

  h1 {
    color: ${({ theme }) => theme.colors.secondarySlate};
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
`;

const AboutContainer = styled.div`
  width: 100%;
  p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 1.5;
  }

  ${respondTo.sm`
        width: 75%;
        p {
            font-size: 17.5px;
        }
    `}
  ${respondTo.md`
        width: 55%;
        p {
            font-size: 17.5px;
        }
    `}
`;

const EmailLink = styled.a`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: 3px;
  margin: 40px 0;
  padding: 15px;
  align-self: flex-start;
`;

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
          <EmailLink href={`mailto:${email}`}>Stay Connected</EmailLink>
          {/* Stay Connected, Stay In Touch */}
        </Content>
      </Header>
    </Container>
  );
};

export default Hero;
