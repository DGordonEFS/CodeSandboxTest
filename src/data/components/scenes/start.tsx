import * as React from "react";
import AssetManager from "./../../../engine/scripts/assetmanager";
import Actions from "./../../../engine/scripts/actions";
import BaseScene from "./../../../engine/components/basescene";

export default class Scene extends BaseScene {
  constructor(props) {
    super(props);
    this.state.Id = "start";
  }

  output() {
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
  }
}

/*
 
      */
