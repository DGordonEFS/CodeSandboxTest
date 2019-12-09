var SaveManager = {};
SaveManager.Save = GameFlags => {
  localStorage.setItem("gameflags", GameFlags);
};
SaveManager.Load = GameFlags => {
  GameFlags = localStorage.getItem("gameflags");
};

export default SaveManager;
