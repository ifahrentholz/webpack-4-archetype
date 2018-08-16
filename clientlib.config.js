module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot: "clientlibs",

  // define all clientlib options here as array... (multiple clientlibs)
  libs: [
    {
      name: "archetype.base.apps.mainapp",
      assets: {
        js: [
          "dist/static/js/index.js"
        ],
        css: [
          "dist/static/css/index.css"
        ]
      }
    },
  ]
}