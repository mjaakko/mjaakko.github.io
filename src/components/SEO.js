import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export default ({ pageTitle, pageDescription, pagePath }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `}
    render={({ site: { siteMetadata: metadata } }) => {
      const title = pageTitle
        ? `${pageTitle} | ${metadata.title}`
        : metadata.title;

      const canonicalUrl = metadata.siteUrl + pagePath;

      const description =
        pageDescription || "Personal website of Jaakko Malkki";

      return (
        <Helmet>
          <html lang="en" prefix="og: http://ogp.me/ns#" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* <meta property="og:image" content={shareImageUrl} /> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* <meta name="twitter:image" content={shareImageUrl} /> */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
      );
    }}
  />
);
