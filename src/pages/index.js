import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout, Seo, Menu, Hero, About, Footer } from "../components"

const ContentWrapper = styled.div`
  margin-top: 75px;
`

const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Seo />
      <Menu />
      <ContentWrapper>
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
      </ContentWrapper>
      <Footer />
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            skills
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 100, traceSVG: { color: "rgb(56, 47, 92)", threshold: 75 }
                      toFormat: JPG) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
  }
  `;