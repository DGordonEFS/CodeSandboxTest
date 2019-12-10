import * as React from "react";

export default class BaseIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { targetType: this.props.targetType };
  }

  getDisplay() {
    var display =
      this.props.type === this.state.targetType ? "initial" : "none";
    return display;
  }

  render() {
    return (
      <div
        style={{
          display: this.getDisplay()
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
