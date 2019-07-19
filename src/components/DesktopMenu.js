import React from "react";
import styled from "styled-components";

import MenuLink from "./MenuLink";

import useMenuItems from "../hooks/useMenuItems";

const DesktopMenu = styled.nav`
  display: none;

  @media (min-width: 800px) {
    display: inline;
  }
`;

export default () => {
  const menuItems = useMenuItems();

  return (
    <DesktopMenu>
      {menuItems.map(menuItem => (
        <MenuLink
          key={menuItem.path}
          path={menuItem.path}
          title={menuItem.title}
        />
      ))}
    </DesktopMenu>
  );
};
