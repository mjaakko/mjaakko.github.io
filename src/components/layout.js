import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 2rem;
`;

export default ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);
