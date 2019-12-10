import * as React from "react";

export default class BaseHotspot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.id, visible: true };
    this.getDisplay = this.getDisplay.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    if (this.props !== undefined && this.props.onAdded !== undefined)
      this.props.onAdded(this.state.id, this);

    this.onInit();
  }

  onClick() {
    if (this.props !== undefined && this.props.onClick !== undefined)
      this.props.onClick(this.state.id);
  }
  onVisible(vis) {}
  onInit() {}

  getDisplay() {
    return this.state.visible ? "initial" : "none";
  }

  render() {
    return (
      <div
        style={{
          display: this.getDisplay(),
          position: "absolute",
          left: this.props.x,
          top: this.props.y
        }}
        onClick={() => this.onClick()}
      >
        {this.props.children}
      </div>
    );
  }
}
