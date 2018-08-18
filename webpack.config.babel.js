import path from "path";
import webpackMerge from "webpack-merge";

import handleSCSS from "./build-utils/webpack/scss";
import handleES6 from "./build-utils/webpack/es6";
import handleHtml from "./build-utils/webpack/html";
import handleClean from "./build-utils/webpack/clean";

export default (env, argv) => {
  return webpackMerge(
    {
      devtool: "source-map",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]"
      },
      devServer: {
        contentBase: "./dist"
      }
    },
    handleClean(),
    handleSCSS(),
    handleES6(),
    handleHtml()
  );
};
