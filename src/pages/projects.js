import React from "react";

import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import BreadcrumbList from "../components/BreadcrumbList";

export default ({ data, ...props }) => {
  const pages = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO pagePath={props.location.pathname} pageTitle="Projects" />
      <BreadcrumbList
        breadcrumbs={[{ name: "Projects", path: "/projects/" }]}
      />
      <Layout>
        <h1>Projects</h1>
        <ul>
          {pages.map(({ node: page }) => (
            <li key={page.fields.slug}>
              <Link to={page.fields.slug}>{page.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt(pruneLength: 150, format: PLAIN)
        }
      }
    }
  }
`;
