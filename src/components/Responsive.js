import React from "react";
import Media from "react-media";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { client: 0 };
  }

  componentDidMount() {
    this.setState({ client: 1 });
  }

  render() {
    return (
      <Media
        key={this.state.client}
        query="(min-width: 769px)"
        defaultMatches={true}
      >
        {matches => this.props.children(matches)}
      </Media>
    );
  }
}
