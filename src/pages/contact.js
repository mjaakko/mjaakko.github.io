import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import BreadcrumbList from "../components/BreadcrumbList";

export default () => (
  <>
    <SEO pagePath="/contact" pageTitle="Contact" />
    <BreadcrumbList breadcrumbs={[{ name: "Contact", path: "/contact/" }]} />
    <Layout>
      <p>Nothing yet :(</p>
    </Layout>
  </>
);
