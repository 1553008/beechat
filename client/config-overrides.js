const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const { injectBabelPlugin } = require("react-app-rewired");
const rewireCssModules = require("react-app-rewire-css-modules");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireCssModules(config, env);
  config = rewireReactHotLoader(config, env);
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  return config;
};
