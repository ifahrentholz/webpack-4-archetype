import HtmlWEbpackPlugin from 'html-webpack-plugin';

export default () => ({
  plugins: [
    new HtmlWEbpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
})