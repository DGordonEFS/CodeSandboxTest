import * as React from "react";
import SceneManager from "./../engine/scenemanager";
import Actions from "./../engine/actions";

export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sceneId: "start" };
    Actions.HandleLoadScene = id => this.setState({ sceneId: id });
  }

  render() {
    return SceneManager[this.state.sceneId].output();
  }
}
