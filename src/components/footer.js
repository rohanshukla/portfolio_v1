import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FormattedIcon } from './icons';
import { socialLinks } from '../config';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;
const SocialContainer = styled.div`
  margin: 30px 0;
  svg {
    margin: 0 10px;
    height: 23px;
    width: auto;
    color: ${({ theme }) => theme.colors.lightSlate};
    :hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const RepoLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightSlate};
  font-size: ${({ theme }) => theme.fontSizes.smish};
  line-height: 1;
  letter-spacing: 1px;
  word-spacing: 3px;
  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const StyledRepoInfo = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;

  & > span {
    display: inline-flex;
    align-items: center;
    span {
      margin: 0 10px;
    }
  }
  svg {
    display: inline-block;
    height: 18px;
    width: auto;
  }
`;

const Menu = () => {
  const [repoInfo, setRepoInfo] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    fetch('https://api.github.com/repos/shuklarohan/portfolio_v1')
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setRepoInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <Container>
      <SocialContainer>
        {socialLinks.map((social) => (
          <OutboundLink
            key={social.name}
            href={social.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FormattedIcon name={social.name} />
          </OutboundLink>
        ))}
      </SocialContainer>
      <RepoLink
        href="https://github.com/rohanshukla/portfolio_v1"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div>Built by Rohan Shukla</div>
        {
          <StyledRepoInfo>
            <span>
              <FormattedIcon name="Star" />
              <span>{`${repoInfo.stars}`}</span>
            </span>
            <span>
              <FormattedIcon name="Fork" />
              <span>{`${repoInfo.forks}`}</span>
            </span>
          </StyledRepoInfo>
        }
      </RepoLink>
    </Container>
  );
};

export default Menu;
