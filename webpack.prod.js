const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: path.resolve(__dirname, './public/')
  },
  mode: 'production',
  plugins: [
    new Dotenv({
        path: './.env.prod'
    })
  ]
});