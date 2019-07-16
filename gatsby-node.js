const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      redirect: String
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              redirect
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templateComponentForNode(node),
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};

const templateComponentForNode = node => {
  if (node.frontmatter.redirect) {
    return path.resolve(`./src/templates/redirect.js`);
  } else if (node.fields.slug.startsWith("/projects/")) {
    return path.resolve(`./src/templates/project.js`);
  } else {
    return null;
  }
};
