import * as React from "react";
import BaseScene from "./../../../engine/components/basescene";

export default class Scene extends BaseScene {
  constructor(props) {
    super(props);
    this.state.Id = "epilogue";
  }

  output() {
    return (
      <div>
        <div>Epilogue</div>
      </div>
    );
  }
}
