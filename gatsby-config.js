module.exports = {
  siteMetadata: {
    title: "Jaakko Malkki",
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
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography.js` }
    },
    `gatsby-plugin-offline`
  ]
};
