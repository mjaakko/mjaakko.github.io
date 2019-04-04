import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";

export default ({ data, pageContext }) => {
  const page = data.markdownRemark;
  return (
    <>
      <SEO
        pageTitle={page.frontmatter.title}
        pageDescription={page.excerpt}
        pagePath={pageContext.slug}
      />
      <Layout>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
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
      }
      excerpt(pruneLength: 200, format: PLAIN)
    }
  }
`;
