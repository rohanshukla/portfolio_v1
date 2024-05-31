import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../styles/_respondTo';
import InlineLink from '../styles/inlineLink';
import Heading from '../styles/Heading';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding: 20px 0;
  min-height: 100vh;
  ${respondTo.sm`
        margin-top: 0;
    `}
`;

const Timeline = styled.div`
  width: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 1px;
    width: 1px;
    height: calc(100% - 7px);
    top: 7px;
    background: ${({ theme }) => theme.colors.accent};
  }
  ${respondTo.md`
        &:before {
            left: 50%;
        }   
    `}
`;

const Companies = styled.ul`
  margin: 0;
  padding: 0;
`;

const Company = styled.li`
  list-style: none;
  position: relative;
  padding: 0 20px;
  margin-bottom: 50px;
  &:nth-child(odd):before,
  &:nth-child(even):before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.transAccent};
    left: -3px;
    top: 7px;
  }
  &:nth-child(odd),
  &:nth-child(even) {
    text-align: left;
  }
  ${respondTo.md`
        width: 50%;
        margin-bottom: 30px;
        padding: 0 40px;
        box-sizing: border-box;
        &:nth-child(odd) {
            float: left;
            text-align: right;
            clear: both;
        }
        &:nth-child(even) {
            float: right;
            text-align: left;
            clear: both;
        }

        /* Circle style on Line */
        &:nth-child(odd):before {
            left: auto;
            right: -6px;
        }
        &:nth-child(even):before {
            left: -4px;
        }
    `}
`;

const Content = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.lightestSlate};
  }
  div {
    p {
      margin: 10px 0;
      font-size: ${({ theme }) => theme.fontSizes.md};
      line-height: 1.5;
      text-align: justify;
      a {
        ${InlineLink}
      }
    }
  }
`;

const Time = styled.div`
  h4 {
    margin: 15px 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: right;
  }
`;

const ClearDiv = styled.div`
  clear: both;
`;

const AtTheRate = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  a {
    ${InlineLink}
  }
`;

const WorkList = styled.div`
  padding: 10px 0;
  p {
    padding: 4px 0;
  }
`;

const Experience = ({ data }) => {
  return (
    <Container id="experience">
      <div>
        <Heading margin="50px">Experience</Heading>
        <Timeline>
          <Companies>
            {data.map(({ node }, index) => (
              <Company key={index}>
                <Content>
                  <h3>
                    {node.frontmatter.title}
                    <br />
                    <AtTheRate>
                      {' '}
                      @&nbsp;
                      <a
                        href={node.frontmatter.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        {node.frontmatter.company}
                      </a>
                    </AtTheRate>
                  </h3>
                  <WorkList dangerouslySetInnerHTML={{ __html: node.html }} />
                </Content>
                <Time className="time">
                  <h4>{node.frontmatter.duration}</h4>
                </Time>
              </Company>
            ))}
            <ClearDiv />
          </Companies>
        </Timeline>
      </div>
    </Container>
  );
};

export default Experience;
