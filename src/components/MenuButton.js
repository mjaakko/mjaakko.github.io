import React from "react";
import styled from "styled-components";

const MenuButtonBar = styled.span`
  display: block;
  background-color: ${props => props.color || "white"};
  border-radius: 3px;
  height: 5px;
`;

const MenuButton = styled.button.attrs(({ size }) => ({
  style: { width: size, height: size }
}))`
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

export default class extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      this.props.onChange(this.state.open);
    }
  }

  render() {
    return (
      <MenuButton
        size={this.props.size}
        onClick={() =>
          this.setState(state => {
            return { open: !state.open };
          })
        }
      >
        <MenuButtonBar color={this.props.color} />
        <MenuButtonBar color={this.props.color} />
        <MenuButtonBar color={this.props.color} />
      </MenuButton>
    );
  }
}
