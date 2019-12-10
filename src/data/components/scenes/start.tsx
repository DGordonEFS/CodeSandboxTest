import * as React from "react";
import AssetManager from "./../../../engine/scripts/assetmanager";
import Actions from "./../../../engine/scripts/actions";
import BaseScene from "./../../../engine/components/basescene";
import Image from "./../../../engine/components/image";
import Hotspot from "./../../../engine/extensions/missionus/components/hotspot";

AssetManager.URLs["scene_start_background"] = "images/scenes/start/game.png";
AssetManager.URLs["scene_start_train"] = "images/scenes/start/train_2k.png";

export default class Scene extends BaseScene {
  constructor(props) {
    super(props);
    this.state.Id = "start";
  }

  onEnter() {
    console.log("start");
    //Actions.setHotspotVisible("")
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
          src={AssetManager.GetImage("scene_start_background")}
          alt="img"
        />
        <Hotspot
          x={350}
          y={250}
          id="start_btn"
          iconType="talk"
          iconX={40}
          iconY={-30}
          iconWidth={50}
          onClick={id => Actions.loadScene("prologue")}
        >
          <Image
            id="hotspot"
            upImage="icon_use_up"
            overImage="icon_use_over"
            downImage="icon_use_over"
            isButton="true"
            text="hello"
            upStyle={{ color: "black" }}
            overStyle={{ color: "grey" }}
            downStyle={{ color: "red" }}
          />
        </Hotspot>
      </div>
    );
  }
}

/*
 
      */
