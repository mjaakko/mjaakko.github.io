import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";

import useSiteMetadata from "../hooks/useSiteMetadata";

const Header = styled.header`
  background-color: ${props => props.color};
  width: 100%;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px 4px gray;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 800px) {
    max-width: 1350px;
  }
`;

const HeaderTitle = styled.h1`
  display: inline;
  flex-grow: 1;
  margin: 0;
`;

const MobileMenuButton = styled(MenuButton)`
  @media (min-width: 800px) {
    display: none;
  }
`;

export default () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const siteMetadata = useSiteMetadata();

  return (
    <Header color={siteMetadata.headerColor}>
      <HeaderContainer>
        <HeaderTitle>
          <Link to="/" style={{ color: "white" }}>
            {siteMetadata.title}
          </Link>
        </HeaderTitle>
        <DesktopMenu menu={siteMetadata.menu} />
        <MobileMenuButton size="50px" onChange={setMobileMenuOpen} />
      </HeaderContainer>
      <MobileMenu menu={siteMetadata.menu} open={mobileMenuOpen} />
    </Header>
  );
};
