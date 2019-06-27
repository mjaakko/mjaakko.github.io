const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://malkki.xyz",
    title: "Jaakko Malkki",
    description: "Personal website of Jaakko Malkki",
    headerColor: "#825d21",
    menu: [
      {
        path: "/projects",
        title: "Projects"
      },
      {
        path: "/contact",
        title: "Contact"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography.js` }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `content`)
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jaakko Malkki`,
        short_name: `Jaakko Malkki`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#845c21`,
        display: `browser`,
        icon: `src/images/icon.png`,
        include_favicon: true
      }
    },
    `gatsby-plugin-offline`
  ]
};
