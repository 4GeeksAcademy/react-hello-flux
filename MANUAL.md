# React Hello World

1) Create a new NPM Package
```sh
$ npm init -Y
```
2) Add the webpack module bundler
```sh
$ npm install --save-dev webpack
```
3) Create a webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
4) Install babel

```sh
$ npm install --save-dev babel-core babel-loader babel-cli babel-preset-env
```

Configure your webpack.config.js to use the babel loader
```
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
```

Also configure your package.json to use the "env" and "react" presets.
```json
  ...
  "babel":{
    "presets": [
      "env",
      "react"
    ]
  },
  ...
```

5) Install react

```sh
npm install --save react react-dom
```