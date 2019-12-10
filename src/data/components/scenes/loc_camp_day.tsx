import * as React from "react";
import Actions from "./../../../engine/scripts/actions";
import GameFlags from "./../../../engine/scripts/gameflags";
import BaseScene from "./../../../engine/components/basescene";
import AssetManager from "./../../../engine/scripts/assetmanager";
import Hotspot from "./../../../engine/extensions/missionus/components/hotspot";
import Image from "./../../../engine/components/image";

AssetManager.URLs["scene_loc_camp_day_background"] =
  "images/scenes/loc_camp_day/camp_day_bg_2k.jpg";

export default class Scene extends BaseScene {
  constructor(props) {
    super(props);
    this.state.Id = "loc_camp_day";
  }

  onEnter() {
    console.log("loc_camp_day enter");
    Actions.wait(2000).then(() => {
      console.log(GameFlags.CurrentScene);
    });
  }

  onShow() {
    console.log("loc_camp_day show");
  }

  onExit() {
    console.log("loc_camp_day exit");
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
          src={AssetManager.GetImage("scene_loc_camp_day_background")}
          alt="img"
        />
        <Hotspot
          x={350}
          y={250}
          id="start_btn"
          iconType="use"
          iconX={50}
          iconY={50}
          iconWidth={100}
          iconRotation={90}
          rotation={90}
          visible={true}
          onClick={id => Actions.loadScene("epilogue")}
        >
          <Image
            id="hotspot"
            upImage="icon_look_up"
            overImage="icon_look_over"
            downImage="icon_look_down"
            isButton={false}
            text="hello"
            visible={false}
            upStyle={{ color: "black" }}
            overStyle={{ color: "grey" }}
            downStyle={{ color: "red" }}
          />
        </Hotspot>
      </div>
    );
  }
}
