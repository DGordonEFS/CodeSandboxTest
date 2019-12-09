import SceneManager from "./../engine/scenemanager";
import Actions from "./../engine/actions";
import GameFlags from "./../engine/gameflags";
import * as React from "react";

SceneManager["prologue"] = {
  output: scene => {
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
  },
  OnEnter: () => {
    console.log("prologue enter");
    Actions.Wait(2000).then(() => {
      console.log(GameFlags.CurrentScene);
    });
  },
  OnShow: () => {
    console.log("prologue show");
  },
  OnExit: () => {
    console.log("prologue exit");
  }
};
