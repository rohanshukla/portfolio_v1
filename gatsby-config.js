const config = require('./src/config')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    author: config.name,
    description: config.siteDescription,
    keywords: config.siteKeywords
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'roboto mono',
          'Lato\:400,400i,700,700i'
        ],
        display: 'swap'
      }
    }
  ],
}
