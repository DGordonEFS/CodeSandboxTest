import * as React from "react";

import IconGroup from "./../../../components/baseicongroup";
import Icon from "./../../../components/baseicon";
import Image from "./../../../components/image";

export default class HotspotIconGroup extends React.Component {
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
            upImage="icon_talk_up"
            overImage="icon_talk_over"
            downImage="icon_talk_down"
            width={this.props.width}
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
