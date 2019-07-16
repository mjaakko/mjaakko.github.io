import React, { useEffect } from "react";
import { Link, navigate, graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/layout";

export default props => {
  useEffect(() => {
    navigate(props.data.markdownRemark.frontmatter.redirect, { replace: true });
  }, []);
  return (
    <>
      <SEO
        pageTitle={props.data.markdownRemark.frontmatter.title}
        pagePath={props.data.markdownRemark.frontmatter.redirect}
      />
      <Layout slug={props.data.markdownRemark.fields.slug}>
        This page has been moved to{" "}
        <Link to={props.data.markdownRemark.frontmatter.redirect} replace>
          <code>{props.data.markdownRemark.frontmatter.redirect}</code>
        </Link>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        redirect
      }
    }
  }
`;
