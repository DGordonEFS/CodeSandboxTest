import * as React from "react";

export default class BaseHotspot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props.visible !== false, mouseState: 0 };
    this.getDisplay = this.getDisplay.bind(this);
    this.onClick = this.onClick.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    if (this.props !== undefined && this.props.onAdded !== undefined)
      this.props.onAdded(this.props.id, this);

    this.onInit();
  }

  onClick() {
    if (this.props !== undefined && this.props.onClick !== undefined)
      this.props.onClick(this.props.id);
  }
  onVisible(vis) {}
  onInit() {}

  getDisplay() {
    return this.state.visible ? "initial" : "none";
  }

  onMouseEnter() {
    this.setState({ mouseState: 1 });
  }

  onMouseLeave() {
    this.setState({ mouseState: 0 });
  }

  onMouseDown() {
    this.setState({ mouseState: 2 });
  }

  onMouseUp() {
    this.setState({ mouseState: 0 });
  }

  render() {
    var rotation = {
      transform: `rotate(${
        this.props.rotation !== undefined ? this.props.rotation : 0
      }deg)`
    };

    return (
      <div
        style={{
          ...{
            display: this.getDisplay(),
            position: "absolute",
            left: this.props.x,
            top: this.props.y
          },
          ...rotation
        }}
        onClick={() => this.onClick()}
        onMouseEnter={e => this.onMouseEnter()}
        onMouseLeave={e => this.onMouseLeave()}
        onMouseDown={e => this.onMouseDown()}
        onMouseUp={e => this.onMouseUp()}
      >
        {this.props.children}
      </div>
    );
  }
}
