const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/')
  },
  mode: 'development',
  devtool: "source-map",
  plugins: [
      new Dotenv({
          path: './.env.dev'
      })
  ]
})