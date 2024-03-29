import * as React from "react";

import AssetManager from "./../scripts/assetmanager";

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseState: 0,
      suppliedMouseState: 0,
      visible: this.props.visible !== false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay() {
    return this.state.visible ? "initial" : "none";
  }

  onMouseEnter() {
    this.setState({ mouseState: 1 });
    if (this.props.onMouseEnter !== undefined) this.props.onMouseEnter();
  }

  onMouseLeave() {
    this.setState({ mouseState: 0 });
    if (this.props.onMouseLeave !== undefined) this.props.onMouseLeave();
  }

  onMouseDown() {
    this.setState({ mouseState: 2 });
    if (this.props.onMouseDown !== undefined) this.props.onMouseDown();
  }

  onMouseUp() {
    this.setState({ mouseState: 0 });
    if (this.props.onMouseUp !== undefined) this.props.onMouseUp();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.mouseState !== undefined &&
      nextProps.mouseState !== prevState.suppliedMouseState
    ) {
      return { suppliedMouseState: nextProps.mouseState };
    } else return null;
  }

  render() {
    var imageURL = "";

    //console.log(this.props.id + ", " + this.state.suppliedMouseState);

    var mouseState = Math.max(
      this.state.mouseState,
      this.state.suppliedMouseState
    );

    var rotation = {
      transform: `rotate(${
        this.props.rotation !== undefined ? this.props.rotation : 0
      }deg)`,
      display: this.getDisplay()
    };

    var draggable =
      this.props.draggable !== undefined ? this.props.draggable : false;

    var isButton = this.props.isButton;

    if (!isButton) {
      var upImage = this.props.upImage;
      var overImage =
        this.props.overImage !== undefined
          ? this.props.overImage
          : this.props.upImage;
      var downImage =
        this.props.downImage !== undefined
          ? this.props.downImage
          : this.props.upImage;

      switch (mouseState) {
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

      return (
        <img
          src={imageURL}
          alt={imageURL}
          style={{ ...{ width: this.props.width }, ...rotation }}
          draggable={draggable}
          onMouseEnter={() => this.onMouseEnter()}
          onMouseLeave={() => this.onMouseLeave()}
          onMouseDown={() => this.onMouseDown()}
          onMouseUp={() => this.onMouseUp()}
        >
          {this.props.children}
        </img>
      );
    } else {
      var style = this.props.upStyle;

      switch (mouseState) {
        case 1:
          style = this.props.overStyle;
          break;
        case 2:
          style = this.props.downStyle;
          break;
      }

      style = { ...style, rotation };

      //  style["pointerEvents"] = "none";

      return (
        <button
          style={style}
          draggable={draggable}
          onMouseEnter={() => this.onMouseEnter()}
          onMouseLeave={() => this.onMouseLeave()}
          onMouseDown={() => this.onMouseDown()}
          onMouseUp={() => this.onMouseUp()}
        >
          {this.props.text}
          {this.props.children}
        </button>
      );
    }
  }
}
