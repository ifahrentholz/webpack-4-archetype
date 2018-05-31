const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function(env, argv) {

  this.isProduction = argv.mode === "production";
  this.productionPlugins = [];

  if (this.isProduction) {
    this.productionPlugins.push(
      new UglifyJsPlugin({
        sourceMap: true
      })
    );
  }

  return {
    context: path.resolve(__dirname),
    devtool: this.isProduction ? "source-map" : "",

    entry: [
      "../src/js/index.js",
      "../src/styles/styles.scss"
    ],

    output: {
      path: path.resolve(__dirname, "../dist/js"),
      filename: "index.js",
      libraryTarget: "umd",
      chunkFilename: "[name].js"
    },

    plugins: [
      // Delete dist folder
      new CleanWebpackPlugin([
        "../dist"
      ], {
        allowExternal: true,
        verbose: true,
        dry: false
      }),

      // Create a [name].css file in filesystem
      new MiniCssExtractPlugin({
        filename: "../styles/[name].css",
        chunkFilename: "../styles/[id].css",
      }),

      new CopyWebpackPlugin([
        { from: '../src/assets/**/*', to: '../', context: "../src" },
        { from: "../src/*.html", to: "../", context: "../src/" }
      ]),

      ...this.productionPlugins
    ],

    module: {
      rules: [
        // Configure ES6 loader
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          use: {
            loader: "babel-loader"
          }
        },
        // Configure scss loader
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                minimize: false,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: {
                  path: "../_build/postcss.config.js"
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            },
          ],
        }
      ]
    },
  }
}