import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import typography from "../utils/typography";

const { options } = typography;

const MenuLink = styled(Link)`
  display: inline-block;
  color: white;
  font-weight: bold;
  font-family: ${options.headerFontFamily.join()};
  margin: 0 0.5rem;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    color: white;
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    &:hover {
      text-decoration: none;
      transform: rotate(10deg);
    }
  }
`;

export default ({ title, path }) => <MenuLink to={path}>{title}</MenuLink>;
