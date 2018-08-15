import path from "path";

export default () => ({
  entry: {
    "./static/js/index.js": "./src/index.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules/',
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: 'babel-loader'
      }
    }]
  }
});