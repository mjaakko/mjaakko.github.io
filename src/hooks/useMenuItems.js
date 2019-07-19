import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { allMenuItemsYaml } = useStaticQuery(graphql`
    query {
      allMenuItemsYaml {
        nodes {
          path
          title
        }
      }
    }
  `);

  return allMenuItemsYaml.nodes;
};
