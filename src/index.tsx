import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import AssetManager from "./engine/assetmanager";
import Scene from "./components/scene";
import "./scenes/scenes";

AssetManager.IsExternal = true;
AssetManager.ExternalPrependURL = "http://efsdeveloper.com/codesandboxtest/";
AssetManager.InternalPrependURL = "./";
AssetManager.URLs["start"] = "images/start/game.png";

const rootElement = document.getElementById("root");
render(<Scene />, rootElement);

//Actions.HandleLoadScene = scene.HandleLoadScene;
