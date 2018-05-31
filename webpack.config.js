const webpack = require('webpack');
const path = require("path");
const webpackMerge = require('webpack-merge');

const handleSCSS = require("./build-utils/handlers/scss");
const handleES6 = require("./build-utils/handlers/es6");

module.exports = (env, argv) => {
  return webpackMerge({
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist/"),
    }
  },
    handleSCSS(),
    handleES6()
  );
};