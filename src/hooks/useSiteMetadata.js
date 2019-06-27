import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
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
