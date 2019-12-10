var Actions = {};
Actions.loadScene = id => {};
Actions.wait = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export default Actions;
