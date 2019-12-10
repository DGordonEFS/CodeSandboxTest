import * as React from "react";

import AssetManager from "./../scripts/assetmanager";

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseState: 0 };
  }

  render() {
    var imageURL = "";

    var upImage = this.props.upImage;
    var overImage =
      this.props.overImage !== undefined
        ? this.props.overImage
        : this.props.upImage;
    var downImage =
      this.props.downImage !== undefined
        ? this.props.downImage
        : this.props.upImage;

    switch (this.state.mouseState) {
      case 0:
        imageURL = AssetManager.GetImage(upImage);
        break;

      case 1:
        imageURL = AssetManager.GetImage(overImage);
        break;

      case 2:
        imageURL = AssetManager.GetImage(downImage);
        break;
    }

    var style = { width: this.props.width };

    var draggable =
      this.props.draggable !== undefined ? this.props.draggable : false;
    return (
      <img
        src={imageURL}
        alt="img"
        style={style}
        draggable={draggable}
        onMouseEnter={() => this.setState({ mouseState: 1 })}
        onMouseLeave={() => this.setState({ mouseState: 0 })}
        onMouseDown={() => this.setState({ mouseState: 2 })}
        onMouseUp={() => this.setState({ mouseState: 0 })}
      >
        {this.props.children}
      </img>
    );
  }
}
