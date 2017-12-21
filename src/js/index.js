import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import 'bootstrap';
import '../css/index.scss';

var verySimpleComponent = function(){
  return (<p>Hello World</p>);
}


// Add CSS files to bundle
//require('../css/styles.scss');
// Render application to DOM
ReactDOM.render(
    <verySimpleComponent />,
    document.querySelector('#app')
);