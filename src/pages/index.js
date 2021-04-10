import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout, Seo, Menu, Hero, About, Experience, Project, Footer } from "../components"

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
        <Experience data={data.experience.edges} />
        <Project data={data.projects.edges} />
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
    experience: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/jobs/"}}, sort: {fields: [frontmatter___startDate], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            company
            startDate
            location
            duration
            url
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/projects/"}
        frontmatter: { show: { ne: false } }
      }, 
      sort: {fields: [frontmatter___date], order: DESC}
      ) {
      edges {
        node {
          frontmatter {
            title
            github
            url
            tech
          }
          html
        }
      }
    }
  }
  `;