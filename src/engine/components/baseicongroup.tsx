import * as React from "react";

export default class BaseIconGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay() {
    return this.state.visible ? "initial" : "none";
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
