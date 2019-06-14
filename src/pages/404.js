import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Page not found</h1>
    <p>
      The page you were looking for does not exist. Maybe go to{" "}
      <Link to="/">front page</Link>?
    </p>
  </Layout>
);
