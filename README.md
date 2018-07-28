# Hello World with React + Flux

This boilerplate is intended for 4Geeks Academy students when doing projects with React.js using Flux.

## Installation

##### 1. Make sure you have node 8+ and the breathecode-cli
```
$ nvm i 8
```

##### 2. Using the breathecode-cli:
```
$ bc start:flux -r
```
Note: if you don't have the breathecode-cli, [here are the installation instructions](https://github.com/breatheco-de/breathecode-cli).

##### 3. Install the npm dependencies:
```
$ npm install
```

##### 4. Start the development server
```
$ npm run c9
```

That is it! Start coding your ReactJS+Flux application.

Note: If you ever want to manually install all of this read the [MANUAL.md file.](/MANUAL.md)

### REMEMBER:

The application flow starts at **index.js**, you have to import any other files or assets into index.js in order for webpack to include them in the bundle.

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
