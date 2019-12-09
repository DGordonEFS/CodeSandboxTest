import * as React from "react";
import Actions from "./../../../engine/scripts/actions";
import GameFlags from "./../../../engine/scripts/gameflags";
import BaseScene from "./../../../engine/components/basescene";

export default class Scene extends BaseScene {
  constructor(props) {
    super(props);
    this.state.Id = "prologue";
  }

  OnEnter() {
    console.log("prologue enter");
    Actions.Wait(2000).then(() => {
      console.log(GameFlags.CurrentScene);
    });
  }

  OnShow() {
    console.log("prologue show");
  }

  OnExit() {
    console.log("prologue exit");
  }

  output() {
    return (
      <div>
        <div>Prologue</div>
        <button
          style={{ position: "absolute", left: "500px" }}
          onClick={() => Actions.LoadScene("epilogue")}
        >
          Next
        </button>
      </div>
    );
  }
}
