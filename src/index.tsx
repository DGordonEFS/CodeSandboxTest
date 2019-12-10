import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import Actions from "./engine/scripts/actions";
import AssetManager from "./engine/scripts/assetmanager";
import SceneManager from "./data/components/scenes/scenemanager";

AssetManager.IsExternal = true;
AssetManager.ExternalPrependURL = "http://efsdeveloper.com/codesandboxtest/";
AssetManager.InternalPrependURL = "./";

///////
// icons
///////
AssetManager.URLs["icon_look_up"] = "images/icons/look_up.png";
AssetManager.URLs["icon_look_over"] = "images/icons/look_over.png";
AssetManager.URLs["icon_look_down"] = "images/icons/look_down.png";
AssetManager.URLs["icon_talk_up"] = "images/icons/talk_up.png";
AssetManager.URLs["icon_talk_over"] = "images/icons/talk_over.png";
AssetManager.URLs["icon_talk_down"] = "images/icons/talk_down.png";
AssetManager.URLs["icon_use_up"] = "images/icons/use_up.png";
AssetManager.URLs["icon_use_over"] = "images/icons/use_over.png";
AssetManager.URLs["icon_use_down"] = "images/icons/use_down.png";

const rootElement = document.getElementById("root");
render(<SceneManager />, rootElement);

Actions.loadScene("start");

//Actions.HandleLoadScene = scene.HandleLoadScene;
