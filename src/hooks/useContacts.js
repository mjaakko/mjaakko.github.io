import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { allContactsYaml } = useStaticQuery(graphql`
    query {
      allContactsYaml {
        nodes {
          type
          username
          link
          recaptcha
          recaptchaUrl
          icon {
            publicURL
          }
        }
      }
    }
  `);

  return allContactsYaml.nodes;
};
