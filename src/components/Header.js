import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

import Responsive from "./Responsive";
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const MobileMenu = ({ menu }) => (
  <MobileMenuNav>
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
  display: inline;
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
  padding: 1rem ${props => (props.desktop ? "10rem" : "1rem")};
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px 4px gray;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  display: inline;
  flex-grow: 1;
  margin: 0;
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
          <Responsive>
            {desktop => (
              <Header
                color={data.site.siteMetadata.headerColor}
                desktop={desktop}
              >
                <HeaderContainer>
                  <HeaderTitle>
                    <Link to="/" style={{ color: "white" }}>
                      {data.site.siteMetadata.title}
                    </Link>
                  </HeaderTitle>
                  {desktop && (
                    <DesktopMenu menu={data.site.siteMetadata.menu} />
                  )}
                  {!desktop && (
                    <MenuButton size="50px" onChange={this.onChange} />
                  )}
                </HeaderContainer>
                {!desktop && this.state.mobileMenuOpen && (
                  <MobileMenu menu={data.site.siteMetadata.menu} />
                )}
              </Header>
            )}
          </Responsive>
        )}
      />
    );
  }
}
