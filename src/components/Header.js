import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import Responsive from "./Responsive";
import MenuButton from "./MenuButton";

import typography from "../utils/typography";

const { options } = typography;

const MenuItem = React.memo(({ title, path }) => (
  <Link
    to={path}
    style={{
      color: "white",
      fontWeight: "bold",
      fontFamily: options.headerFontFamily,
      margin: "0 0.5rem"
    }}
  >
    {title}
  </Link>
));

const MobileMenu = ({ menu }) => (
  <nav
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "stretch"
    }}
  >
    {menu.map(menuItem => (
      <MenuItem
        key={menuItem.path}
        path={menuItem.path}
        title={menuItem.title}
      />
    ))}
  </nav>
);

const DesktopMenu = ({ menu }) => (
  <nav style={{ display: "inline" }}>
    {menu.map(menuItem => (
      <MenuItem
        key={menuItem.path}
        path={menuItem.path}
        title={menuItem.title}
      />
    ))}
  </nav>
);

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
              <header
                style={{
                  backgroundColor: data.site.siteMetadata.headerColor,
                  width: "100%",
                  padding: `1rem ${desktop ? "10rem" : "1rem"}`,
                  marginBottom: "1rem",
                  boxShadow: "0 1px 4px 4px gray"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%"
                  }}
                >
                  <h1 style={{ display: "inline", flexGrow: 1, margin: 0 }}>
                    <Link to="/" style={{ color: "white" }}>
                      {data.site.siteMetadata.title}
                    </Link>
                  </h1>
                  {desktop && (
                    <DesktopMenu menu={data.site.siteMetadata.menu} />
                  )}
                  {!desktop && (
                    <MenuButton
                      style={{ width: 50, height: 50 }}
                      onChange={this.onChange}
                    />
                  )}
                </div>
                {!desktop && this.state.mobileMenuOpen && (
                  <MobileMenu menu={data.site.siteMetadata.menu} />
                )}
              </header>
            )}
          </Responsive>
        )}
      />
    );
  }
}
