import React from "react"
import Img from "gatsby-image"

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    return (
        <div>
            <h2>{frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ol>
                {
                    frontmatter.skills.map((skill, index) => {
                        return (
                            <li key={index}>{skill}</li>
                        )
                    })
                }
            </ol>
            <Img fluid={frontmatter.avatar.childImageSharp.fluid} alt="Avatar" />
        </div>
    )
}

export default About