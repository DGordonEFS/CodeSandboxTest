var Actions = {};
Actions.LoadScene = id => {};
Actions.Wait = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export default Actions;
