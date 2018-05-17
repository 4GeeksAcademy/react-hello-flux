# Hello World with React + Flux

This boilerplate is intended for 4Geeks Academy students when doing projects with React.js using Flux.

## Installation

##### 1. Make sure you have node 8+ and the breathecode-cli
```
$ nvm install 8
$ nvm use 8
```

##### 2. Using the breathecode-cli:
```
$ breathecode start:flux -r
```
Note: if you don't have the breathecode-cli, [here are the installation instructions](https://github.com/breatheco-de/breathecode-cli).

##### 3. Install the npm dependencies:
```
$ npm install
```
That is it! Start coding your ReactJS+Flux application.

Note: If you ever want to manually install all of this read the [MANUAL.md file.](/MANUAL.md)

## How start coding?

Now you have a src/js/index.js that will start your javascript execution (like the window.onload that you would use in Vanilla.js).

###### Every time you save your source code (js & css files) you will have to re-build your bundle.

```sh
$ npm run build
```

###### Webpack will generate your bundle.js inside the public folder

Check that a public/bundle.js file has been created by Webpack. Read the output from the console that must be similar to this:

```sh
> workspace@1.0.0 transpile-dev /home/ubuntu/workspace
> webpack --config webpack.config.js

Hash: 64f06c46f625967b3aeb
Version: webpack 3.8.1
Time: 99ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.52 kB       0  [emitted]  main
   [0] ./src/bundle.js 51 bytes {0} [built]
```

###### NOTE: You have to re-bundle every time yo update your JS or CSS/SASS files.

You are ready to go! You can commit & push to your new repository whenever you want.

### REMEMBER:

The application flow starts at **index.js**, you have to import any other files or assets into app.js in order for webpack to include them in the bundle.

For example, inside index.js you can do:

```js
window.onload = function(){
    console.log('hello world');
}
```

To include images, styles or any other type of file just use the **import** command:

```js

    //This will include file.js into your bundle.
    import 'js/file2.js';
    
    //this will include the styles at index.scss to your bundle.
    import '../styles/index.scss';

```

1. All your JS and CSS code must go inside the src/ directory, and webpack will automaticly bundle them and export them into the public folder.

2. The HTML code must be inside public/index.html
