import * as React from "react";
import GameFlags from "./../scripts/gameflags";

export default class BaseScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Id: "" };
    this.getDisplay = this.getDisplay.bind(this);
  }

  componentDidMount() {
    if (this.props !== undefined && this.props.onMounted !== undefined)
      this.props.onMounted(this.state.Id, this);
  }

  getDisplay() {
    return GameFlags.CurrentScene === this.state.Id ? "initial" : "none";
  }

  OnEnter() {}
  OnShow() {}
  OnExit() {}

  render() {
    return <div style={{ display: this.getDisplay() }}>{this.output()}</div>;
  }

  output() {
    return null;
  }
}
