import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          headerColor
          menu {
            path
            title
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
