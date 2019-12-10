import * as React from "react";

import BaseHotspot from "./../../../components/basehotspot";
import HotspotIconGroup from "./hotspoticongroup";

export default class Hotspot extends BaseHotspot {
  render() {
    var iconX = this.props.iconX !== undefined ? this.props.iconX : 0;
    var iconY = this.props.iconY !== undefined ? this.props.iconY : 0;

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
        <HotspotIconGroup
          x={iconX}
          y={iconY}
          width={this.props.iconWidth}
          targetType={this.props.iconType}
        />
      </div>
    );
  }
}
