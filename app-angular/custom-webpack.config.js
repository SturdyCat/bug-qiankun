const appName = require("./package.json").name;

module.exports = {
  output: {
    library: appName,
    libraryTarget: "umd",
    jsonpFunction: `webpackJsonp_${appName}`,
  },
  externals: {
    "zone.js": "Zone",
  },
};
