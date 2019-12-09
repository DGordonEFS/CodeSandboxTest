import SceneManager from "./../engine/scenemanager";
import * as React from "react";

SceneManager["epilogue"] = {
  output: scene => {
    return (
      <div>
        <div>Epilogue</div>
      </div>
    );
  },
  OnEnter: () => {},
  OnShow: () => {},
  OnExit: () => {}
};
