import MiniCssExtractPlugin, { loader as _loader } from "mini-css-extract-plugin";

export default () => ({
  entry: [
    "./src/index.scss"
  ],
  plugins: [
    // Create a [name].css file in filesystem
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        _loader, {
          loader: "css-loader",
          options: {
            minimize: false,
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        },
      ]
    }]
  }
});