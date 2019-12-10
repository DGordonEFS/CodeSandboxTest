import * as React from "react";

import BaseHotspot from "./../../../components/basehotspot";
import HotspotIconGroup from "./hotspoticongroup";

export default class Hotspot extends BaseHotspot {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { mouseState: this.state.mouseState })
    );

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
        onMouseEnter={() => this.setState({ mouseState: 1 })}
        onMouseLeave={() => this.setState({ mouseState: 0 })}
        onMouseDown={() => this.setState({ mouseState: 2 })}
        onMouseUp={() => this.setState({ mouseState: 0 })}
      >
        {childrenWithProps}
        <HotspotIconGroup
          x={iconX}
          y={iconY}
          width={this.props.iconWidth}
          targetType={this.props.iconType}
          mouseState={this.state.mouseState}
          onMouseEnter={() => this.onMouseEnter()}
          onMouseLeave={() => this.onMouseLeave()}
          onMouseDown={() => this.onMouseDown()}
          onMouseUp={() => this.onMouseUp()}
        />
      </div>
    );
  }
}
