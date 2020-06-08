import React from "react"

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
        </div>
    )
}

export default About