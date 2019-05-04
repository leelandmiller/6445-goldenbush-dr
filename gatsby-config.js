module.exports = {
  siteMetadata: {
    title: `6445 Goldenbush Dr.`,
    description: `6445 Goldenbush Dr. Carlsbad, CA is a stunning 2 story home in Carlsbad Shorepointe. 3,188 sq ft, 4 bed, 4 bath w/ entry level office and 3 car garage. This home is an entertainer’s dream with a large kitchen, multiple living areas and private tranquil backyard with waterfall feature. Low HOA at $99/month, RV storage at $40/month, coveted Carlsbad School District and just a few miles from the beach. Close to all shopping and restaurants.`,
    author: `@leelandmiller`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homeImages`,
        path: `${__dirname}/src/images/home`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Tangerine', 'Saira Extra Condensed']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/aji-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
