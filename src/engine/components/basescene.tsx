import * as React from "react";
import GameFlags from "./../scripts/gameflags";

export default class BaseScene extends React.Component {
  hotspots = {};

  constructor(props) {
    super(props);
    this.state = { Id: "" };
    this.getDisplay = this.getDisplay.bind(this);
    this.setHotspotVisible = this.setHotspotVisible.bind(this);
  }

  componentDidMount() {
    if (this.props !== undefined && this.props.onAdded !== undefined)
      this.props.onAdded(this.state.Id, this);
  }

  getDisplay() {
    return GameFlags.CurrentScene === this.state.Id ? "initial" : "none";
  }

  onEnter() {}
  onShow() {}
  onExit() {}

  setHotspotVisible(id, vis) {
    this.hotspots[id].setState({ visible: vis });
  }

  render() {
    return <div style={{ display: this.getDisplay() }}>{this.output()}</div>;
  }

  output() {
    return null;
  }
}
