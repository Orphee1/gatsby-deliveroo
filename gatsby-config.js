require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Deliveroo`,
    description: `Little Deliveroo's clone app demo, built with Gatsby, GraphQl, Contentful`,
    author: `Hugo Lattard`,
    titleTemplate: `%s | Deliveroo in Gatsby`,
    url: `https://hl-gatsby-deliveroo.netlify.app/`,
    twitterUsername: `@HugoLattard`,
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
    `gatsby-plugin-image`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lep2h1zc06oo`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["IBM Plex Sans", "Barlow"],
        },
        adobe: {
          families: ["Stratos"],
        },
      },
    },
  ],
}
