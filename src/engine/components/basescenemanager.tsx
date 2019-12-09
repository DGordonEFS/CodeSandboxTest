import * as React from "react";
import Actions from "./../scripts/actions";
import GameFlags from "./../scripts/gameflags";
import SaveManager from "./../scripts/savemanager";

export default class BaseSceneManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sceneId: "", scenes: {} };
    this.handleLoadScene = this.handleLoadScene.bind(this);
    this.handleMount = this.handleMount.bind(this);

    Actions.LoadScene = this.handleLoadScene;
  }

  handleLoadScene(id) {
    var lastScene = this.state.scenes[GameFlags.CurrentScene];

    if (lastScene !== undefined) lastScene.OnExit();

    GameFlags.CurrentScene = id;
    this.setState({ sceneId: id });
    SaveManager.Save();
    var currentScene = this.state.scenes[GameFlags.CurrentScene];
    if (currentScene !== undefined) {
      currentScene.OnEnter();
      currentScene.OnShow();
    }
  }

  handleMount(id, scene) {
    var scenes = this.state.scenes;
    scenes[id] = scene;
    this.setState({ scenes: scenes });
  }

  render() {
    return null;
  }
}
