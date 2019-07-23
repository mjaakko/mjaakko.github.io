import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { allContactsYaml } = useStaticQuery(graphql`
    query {
      allContactsYaml {
        nodes {
          type
          username
          link
          icon {
            publicURL
          }
        }
      }
    }
  `);

  return allContactsYaml.nodes;
};
