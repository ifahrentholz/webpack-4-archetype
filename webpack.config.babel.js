import webpack from "webpack";
import path from "path";
import webpackMerge from "webpack-merge";

import handleSCSS from "./build-utils/handlers/scss";
import handleES6 from "./build-utils/handlers/es6";

export default (env, argv) => {
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