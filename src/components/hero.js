import React from "react"

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    return (
        <header>
            <h2>{frontmatter.title}</h2>
            <h1>{frontmatter.name}</h1>
            <h3>{frontmatter.subtitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }}>

            </div>
        </header>
    )
}

export default Hero