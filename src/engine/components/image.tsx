import * as React from "react";

import AssetManager from "./../scripts/assetmanager";

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseState: 0, suppliedMouseState: 0 };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
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

      var style = { width: this.props.width };

      return (
        <img
          src={imageURL}
          alt={imageURL}
          style={style}
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
