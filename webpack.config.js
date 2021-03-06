const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    index: ['./src/index.ts'],
    utils: ['./src/utils/index.ts'],
    actions: ['./src/actions/index.ts']
  },
  output: {
    path: path.join(__dirname, './dist'),
    libraryTarget: 'umd',
    filename: "[name].js"
  },
  resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
        // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'types'])
  ]
};