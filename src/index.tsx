import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import Actions from "./engine/scripts/actions";
import AssetManager from "./engine/scripts/assetmanager";
import SceneManager from "./data/components/scenes/scenemanager";

AssetManager.IsExternal = true;
AssetManager.ExternalPrependURL = "http://efsdeveloper.com/codesandboxtest/";
AssetManager.InternalPrependURL = "./";
AssetManager.URLs["start"] = "images/start/game.png";

const rootElement = document.getElementById("root");
render(<SceneManager />, rootElement);

Actions.LoadScene("start");

//Actions.HandleLoadScene = scene.HandleLoadScene;
