import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

import MenuButton from "./MenuButton";

import typography from "../utils/typography";

const { options } = typography;

const MenuLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-family: ${options.headerFontFamily.join()};
  margin: 0 0.5rem;
`;

const MenuItem = React.memo(({ title, path }) => (
  <MenuLink to={path}>{title}</MenuLink>
));

const MobileMenuNav = styled.nav`
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;

  @media (min-width: 800px) {
    display: none;
  }
`;

const MobileMenu = ({ menu, open }) => (
  <MobileMenuNav open={open}>
    {menu.map(menuItem => (
      <MenuItem
        key={menuItem.path}
        path={menuItem.path}
        title={menuItem.title}
      />
    ))}
  </MobileMenuNav>
);

const DesktopMenuNav = styled.nav`
  display: none;

  @media (min-width: 800px) {
    display: inline;
  }
`;

const DesktopMenu = ({ menu }) => (
  <DesktopMenuNav>
    {menu.map(menuItem => (
      <MenuItem
        key={menuItem.path}
        path={menuItem.path}
        title={menuItem.title}
      />
    ))}
  </DesktopMenuNav>
);

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

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mobileMenuOpen: false };
  }

  onChange = mobileMenuOpen => this.setState({ mobileMenuOpen });

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                headerColor
                menu {
                  path
                  title
                }
              }
            }
          }
        `}
        render={data => (
          <Header color={data.site.siteMetadata.headerColor}>
            <HeaderContainer>
              <HeaderTitle>
                <Link to="/" style={{ color: "white" }}>
                  {data.site.siteMetadata.title}
                </Link>
              </HeaderTitle>
              <DesktopMenu menu={data.site.siteMetadata.menu} />
              <MobileMenuButton size="50px" onChange={this.onChange} />
            </HeaderContainer>
            <MobileMenu
              menu={data.site.siteMetadata.menu}
              open={this.state.mobileMenuOpen}
            />
          </Header>
        )}
      />
    );
  }
}
