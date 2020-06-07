import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/menu"
import Hero from "../components/hero"

const IndexPage = ({ location, data }) => {
  return (
    <Layout>
      <Menu />
      <Hero data={data.hero.edges} />
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
            buttonText
          }
          html
        }
      }
    }
  }
  `;