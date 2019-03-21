import React from "react";
import Layout from "../components/layout";
import GithubEvents from "../components/GithubEvents";
import SEO from "../components/SEO";

export default () => (
  <>
    <SEO pagePath="/" />
    <Layout>
      <GithubEvents user="mjaakko" />
    </Layout>
  </>
);
