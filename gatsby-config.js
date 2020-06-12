/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  plugins: [
    // `gatsby-plugin-sitemap`,
    // `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    // // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://rap-arabe-blog.netlify.app/',
    //     sitemap: 'https://rap-arabe-blog.netlify.app/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
    // {
      // resolve: `gatsby-plugin-manifest`,
      // options: {
      //   name: `GatsbyJS`,
      //   short_name: `GatsbyJS`,
      //   start_url: `/`,
      //   background_color: `#f7f0eb`,
      //   theme_color: `#a2466c`,
      //   display: `standalone`,
      //   icon: `src/images/logosite.png`
      // },
    // },
  ],
}
