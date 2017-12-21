# Hello World with React and Cloud 9

##### Download this repository
```
$ git clone https://github.com/alesanchezr/react-hello.git
```

##### Move all the content outside the react-hello folder

```
$ mv react-hello/* ./
$ mv react-hello/.* ./
$ rmdir react-hello/
```

##### and install the npm package:
```
$ npm install
```
That is it! Start coding your ReactJS application.

<<<<<<< HEAD
Note: If you ever want to manually install all of this read the [MANUAL.md file.](/MANUAL.md)

## How start coding?

Now you have an index.js that will start your javascript execution (like the window.onload).

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
=======
## Bundle development server with hot module using:
```
$ npm run dev
```

## Bundle your files for development using:
>>>>>>> f296f096d4b91fc52cd4d5e4b1a27523a8b7dc5b
```

To include images, styles or any other type of file just use the **import** command:

```js

    //This will include file.js into your bundle.
    import 'js/file2.js';
    
    //this will include the styles at index.scss to your bundle.
    import '../styles/index.scss';

```

<<<<<<< HEAD
1. All your JS and CSS code must go inside the src/ directory, and webpack will automaticly bundle them and export them into the public folder.
2. The HTML code must be inside public/index.html
=======
## Bundle your files for production using:
```
$ npm run production
```
>>>>>>> f296f096d4b91fc52cd4d5e4b1a27523a8b7dc5b
