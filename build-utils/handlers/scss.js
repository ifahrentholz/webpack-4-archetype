const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
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
        MiniCssExtractPlugin.loader, {
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