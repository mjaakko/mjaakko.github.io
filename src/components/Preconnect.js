import React from "react";
import { Helmet } from "react-helmet";

export default ({ url }) => (
  <Helmet>
    <link href={url} rel="preconnect" crossOrigin />
  </Helmet>
);
