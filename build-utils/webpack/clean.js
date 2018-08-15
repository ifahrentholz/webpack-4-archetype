import CleanWebpackPlugin from 'clean-webpack-plugin';

const pathsToClean = [
  'dist'
]

const cleanOptions = {
  root: `${__dirname}../../..`
}

export default () => ({
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
});