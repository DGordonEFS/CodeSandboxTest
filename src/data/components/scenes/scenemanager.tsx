import * as React from "react";
import BaseSceneManager from "./../../../engine/components/basescenemanager";

import StartScene from "./start";
import LocCampDayScene from "./loc_camp_day";
import EpilogueScene from "./epilogue";

export default class SceneManager extends BaseSceneManager {
  render() {
    return (
      <div>
        <StartScene onAdded={this.addScene} />
        <LocCampDayScene onAdded={this.addScene} />
        <EpilogueScene onAdded={this.addScene} />
      </div>
    );
  }
}
