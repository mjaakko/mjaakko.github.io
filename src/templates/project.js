import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import BreadcrumbList from "../components/BreadcrumbList";
import ImageGrid from "../components/ImageGrid";

export default ({ data, pageContext }) => {
  const page = data.markdownRemark;
  return (
    <>
      <SEO
        pageTitle={page.frontmatter.title}
        pageDescription={page.excerpt}
        pagePath={pageContext.slug}
      />
      <BreadcrumbList
        breadcrumbs={[
          { name: "Projects", path: "/projects/" },
          { name: page.frontmatter.title, path: pageContext.slug }
        ]}
      />
      <Layout>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
        {Array.isArray(page.frontmatter.images) &&
          page.frontmatter.images.length > 0 && (
            <>
              <h2>Images</h2>
              <ImageGrid images={page.frontmatter.images} />
            </>
          )}
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        images {
          description
          image {
            id
            thumbnail: childImageSharp {
              fixed(width: 290, height: 170) {
                ...GatsbyImageSharpFixed
              }
            }
            large: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
      excerpt(pruneLength: 200, format: PLAIN)
    }
  }
`;
