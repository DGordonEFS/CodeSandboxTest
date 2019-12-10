import * as React from "react";

export default class BaseIconGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.getDisplay = this.getDisplay.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  getDisplay() {
    return this.state.visible ? "initial" : "none";
  }

  onMouseEnter() {
    if (this.props.onMouseEnter !== undefined) this.props.onMouseEnter();
  }

  onMouseLeave() {
    if (this.props.onMouseExit !== undefined) this.props.onMouseExit();
  }

  onMouseDown() {
    if (this.props.onMouseDown !== undefined) this.props.onMouseDown();
  }

  onMouseUp() {
    if (this.props.onMouseUp !== undefined) this.props.onMouseUp();
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { targetType: this.props.targetType })
    );

    var style = this.props.style;
    style.display = this.getDisplay();
    return <div style={style}>{childrenWithProps}</div>;
  }
}
