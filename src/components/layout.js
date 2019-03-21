import React from "react";

import Header from "./Header";

export default ({ children }) => (
  <>
    <Header />
    <div style={{ margin: `0 auto`, maxWidth: 1000, padding: `0 2rem` }}>
      {children}
    </div>
  </>
);
