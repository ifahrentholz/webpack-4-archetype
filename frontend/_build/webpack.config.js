const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function(env, argv) {

  this.isProduction = argv.mode === "production";

  return {
    context: path.resolve(__dirname),
    devtool: "source-map",

    entry: ["../src/js/index.js", "../src/styles/styles.scss"],

    output: {
      path: path.resolve(__dirname, "../dist/js"),
      filename: "[name].js",
      libraryTarget: "umd"
    },

    plugins: [
      new CleanWebpackPlugin([
        "../dist"
      ], {
        allowExternal: true,
        verbose: true,
        dry: false
      }),

      new UglifyJsPlugin({
        sourceMap: true
      }),

      new MiniCssExtractPlugin({
        filename: "../styles/[name].css",
        chunkFilename: "../styles/[id].css",
      }),

      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          map: {
            inline: false
          },
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true,
      })
    ],

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        }
      ]
    },
  }
}