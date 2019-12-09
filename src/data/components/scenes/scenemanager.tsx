import * as React from "react";
import BaseSceneManager from "./../../../engine/components/basescenemanager";

import StartScene from "./start";
import PrologueScene from "./prologue";
import EpilogueScene from "./epilogue";

export default class SceneManager extends BaseSceneManager {
  render() {
    return (
      <div>
        <StartScene onMounted={this.handleMount} />
        <PrologueScene onMounted={this.handleMount} />
        <EpilogueScene onMounted={this.handleMount} />
      </div>
    );
  }
}
