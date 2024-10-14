const config = require('./src/config');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    author: config.name,
    description: config.siteDescription,
    keywords: config.siteKeywords,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'roboto mono',
          'Poppins:400,400i,700,700i',
          'Lato:400,400i,700,700i',
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rohan Shukla',
        short_name: 'Rohan Shukla',
        start_url: '/',
        background_color: config.colors.darkBG,
        theme_color: config.colors.background,
        display: 'standalone',
        icon: 'static/me.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
