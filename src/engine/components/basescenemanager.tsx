import * as React from "react";
import Actions from "./../scripts/actions";
import GameFlags from "./../scripts/gameflags";
import SaveManager from "./../scripts/savemanager";

export default class BaseSceneManager extends React.Component {
  scenes = {};

  get currentScene() {
    return this.scenes[GameFlags.CurrentScene];
  }

  constructor(props) {
    super(props);
    this.state = { sceneId: "" };
    this.loadScene = this.loadScene.bind(this);
    this.addScene = this.addScene.bind(this);

    Actions.loadScene = this.loadScene;
    Actions.setHotspotVisible = this.setHotspotVisible;
  }

  loadScene(id) {
    var lastScene = this.scenes[GameFlags.CurrentScene];

    if (lastScene !== undefined) lastScene.onExit();

    GameFlags.CurrentScene = id;
    this.setState({ sceneId: id });
    SaveManager.Save();
    if (this.currentScene !== undefined) {
      this.currentScene.onEnter();
      this.currentScene.onShow();
    }
  }

  setHotspotVisible(id, vis) {
    this.currentScene.setHotspotVisible(id, vis);
  }

  addScene(id, scene) {
    this.scenes[id] = scene;
  }

  render() {
    return null;
  }
}
