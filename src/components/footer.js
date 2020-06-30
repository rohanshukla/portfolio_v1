import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FormattedIcon } from "./icons"

const Container = styled.footer`
    display: flex;
    justify-content: center;
    padding: 25px 0;
`
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
`

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
    height: 15px;
    width: auto;
  }
`;

const Menu = () => {
    const [repoInfo, setRepoInfo] = useState({ stars: 0, forks: 0 });

    useEffect(() => {
        fetch('https://api.github.com/repos/shuklarohan/portfolio_v1')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                console.log(stargazers_count, forks_count);
                setRepoInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <Container>
            <RepoLink
                href="https://github.com/shuklarohan/portfolio_v1"
                target="_blank"
                rel="nofollow noopener noreferrer">
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
    )
}

export default Menu