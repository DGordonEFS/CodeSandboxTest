var AssetManager = {
  URLs: {},
  IsExternal: false,
  ExternalPrependURL: "",
  InternalPrependURL: "",
  GetPrependURL: () => {
    return AssetManager.IsExternal
      ? AssetManager.ExternalPrependURL
      : AssetManager.InternalPrependURL;
  },
  GetURL: url => {
    return AssetManager.GetPrependURL() + AssetManager.URLs[url];
  },
  GetImage: id => {
    var url = AssetManager.GetURL(id);
    if (AssetManager.IsExternal) {
      return url;
    } else {
      return require(url);
    }
  }
};

export default AssetManager;
