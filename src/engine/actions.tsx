import AssetManager from "./../engine/assetmanager";
import GameFlags from "./../engine/gameflags";
import SceneManager from "./../engine/scenemanager";
import SaveManager from "./../engine/savemanager";

var Actions = {};
Actions.HandleLoadScene = id => {};
Actions.LoadScene = id => {
  console.log("test");
  if (GameFlags.CurrentScene != null)
    SceneManager[GameFlags.CurrentScene].OnExit();

  GameFlags.CurrentScene = id;
  Actions.HandleLoadScene(id);
  SaveManager.Save();

  console.log("get current scene");

  var currentScene = SceneManager[GameFlags.CurrentScene];

  console.log("import");
  import(AssetManager.GetImage("start")).then(asset => {
    console.log("asset " + asset);
  });
  currentScene.OnEnter();
  currentScene.OnShow();
  /*
  var loadAssets = index => {
    if (index >= currentScene.assets.length) {
    } else {
      console.log("import");
      var url = "";
      import(url);
    }
  };
  */

  //loadAssets(0);
};
Actions.Wait = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export default Actions;
