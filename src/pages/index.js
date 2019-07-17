import React from "react";
import Layout from "../components/layout";
import GithubEvents from "../components/GithubEvents";
import SEO from "../components/SEO";
import BreadcrumbList from "../components/BreadcrumbList";

export default () => (
  <>
    <SEO pagePath="/" />
    <BreadcrumbList breadcrumbs={[]} />
    <Layout>
      <GithubEvents user="mjaakko" />
    </Layout>
  </>
);
