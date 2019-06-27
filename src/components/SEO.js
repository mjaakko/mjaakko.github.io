import React from "react";
import { Helmet } from "react-helmet";

import useSiteMetadata from "../hooks/useSiteMetadata";

export default ({ pageTitle, pageDescription, pagePath }) => {
  const metadata = useSiteMetadata();

  const title = pageTitle ? `${pageTitle} | ${metadata.title}` : metadata.title;

  const canonicalUrl = metadata.siteUrl + pagePath;

  const description = pageDescription || metadata.description;

  const language = "en";

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    inLanguage: language,
    description: metadata.description,
    name: metadata.title,
    url: metadata.siteUrl
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: language,
    url: canonicalUrl,
    name: pageTitle,
    description: description
  };

  return (
    <Helmet>
      <html lang={language} prefix="og: http://ogp.me/ns#" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" description={language} />
      {/* <meta property="og:image" content={shareImageUrl} /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={shareImageUrl} /> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="google-site-verification"
        content="7plJI9PIjUYQfvMz5-tplgZZ5kEGyE7zxOK5kps1CXM"
      />
      <script type="application/ld+json">
        {JSON.stringify([websiteJsonLd, webpageJsonLd])}
      </script>
    </Helmet>
  );
};
