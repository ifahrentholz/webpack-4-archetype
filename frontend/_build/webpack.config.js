const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function(env, argv) {

  this.isProduction = argv.mode === "production";

  this.productionPlugins = [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ];

  this.commonPlugins = [
    new CleanWebpackPlugin([
      "../dist"
    ], {
      allowExternal: true,
      verbose: true,
      dry: false
    }),
  ];

  return {
    context: path.resolve(__dirname),
    devtool: this.isProduction ? "source-map" : "",

    entry: {
      "app": "../src/js/index.js"
    },

    output: {
      path: path.resolve(__dirname, "../dist/js"),
      publicPath: "src/",
      filename: "[name].js",
      libraryTarget: "umd"
    },

    plugins: this.isProduction
      ? [...this.commonPlugins, ...this.productionPlugins]
      : [...this.commonPlugins]
  }
}