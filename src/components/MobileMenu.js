import React from "react";
import styled from "styled-components";

import MenuLink from "./MenuLink";

import useMenuItems from "../hooks/useMenuItems";

const MobileMenu = styled.nav`
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 800px) {
    display: none;
  }
`;

export default ({ open }) => {
  const menuItems = useMenuItems();

  return (
    <MobileMenu open={open}>
      {menuItems.map(menuItem => (
        <MenuLink
          key={menuItem.path}
          path={menuItem.path}
          title={menuItem.title}
        />
      ))}
    </MobileMenu>
  );
};
