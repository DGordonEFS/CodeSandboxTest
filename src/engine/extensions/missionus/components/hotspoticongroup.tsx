import * as React from "react";

import IconGroup from "./../../../components/baseicongroup";
import Icon from "./../../../components/baseicon";
import Image from "./../../../components/image";

export default class HotspotIconGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
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
    return (
      <IconGroup
        style={{
          position: "absolute",
          left: this.props.x,
          top: this.props.y
        }}
        targetType={this.props.targetType}
      >
        <Icon type="talk">
          <Image
            id="talk"
            upImage="icon_talk_up"
            overImage="icon_talk_over"
            downImage="icon_talk_down"
            width={this.props.width}
            mouseState={this.props.mouseState}
            onMouseEnter={() => this.onMouseEnter()}
            onMouseLeave={() => this.onMouseLeave()}
            onMouseDown={() => this.onMouseDown()}
            onMouseUp={() => this.onMouseUp()}
          />
        </Icon>
        <Icon type="look">
          <button>look</button>
        </Icon>
        <Icon type="use">
          <button>use</button>
        </Icon>
      </IconGroup>
    );
  }
}
