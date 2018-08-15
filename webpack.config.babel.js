import path from "path";
import webpackMerge from "webpack-merge";

import handleSCSS from "./build-utils/webpack/scss";
import handleES6 from "./build-utils/webpack/es6";
import handleHtml from "./build-utils/webpack/html";

export default (env, argv) => {
  return webpackMerge({
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist/"),
    }
  },
    handleSCSS(),
    handleES6(),
    handleHtml()
  );
};