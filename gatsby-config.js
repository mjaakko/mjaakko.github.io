module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography.js` }
    },
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
