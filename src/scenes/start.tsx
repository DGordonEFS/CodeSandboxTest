import AssetManager from "./../engine/assetmanager";
import SceneManager from "./../engine/scenemanager";
import Actions from "./../engine/actions";
import * as React from "react";

SceneManager["start"] = {
  output: scene => {
    return (
      <div>
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "800px"
          }}
          src={AssetManager.GetImage("start")}
          alt="img"
        />
        <button
          style={{ position: "absolute", left: "500px" }}
          onClick={() => Actions.LoadScene("prologue")}
        >
          Start Game
        </button>
      </div>
    );
  },
  OnEnter: () => {},
  OnShow: () => {},
  OnExit: () => {}
};
