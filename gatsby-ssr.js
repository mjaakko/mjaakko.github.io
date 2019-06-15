import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    #gatsby-noscript {
        display: none;
    }
`;

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
