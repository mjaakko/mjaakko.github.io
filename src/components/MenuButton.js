import React, { useState } from "react";
import styled from "styled-components";

const MenuButtonBar = styled.span`
  display: block;
  background-color: ${props => props.color || "white"};
  border-radius: 3px;
  height: 5px;
`;

const MenuButton = styled.button`
  width: ${props => props.size};
  height: ${props => props.size};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  padding 0
`;

export default ({ className, color, size, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuButton
      className={className}
      size={size}
      onClick={() => {
        onChange(!open);
        setOpen(!open);
      }}
    >
      <MenuButtonBar color={color} />
      <MenuButtonBar color={color} />
      <MenuButtonBar color={color} />
    </MenuButton>
  );
};
