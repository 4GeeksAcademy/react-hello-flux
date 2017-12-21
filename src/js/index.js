//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//include images into your bundle
import rigoImage from '../img/rigo-baby.jpg';


//create your first component
var VerySimpleComponent = function(){
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      <p><img src={'./public/'+rigoImage} /></p>
      <a href="#" className="btn btn-success">If you see this gree button... bootstrap is working</a>
    </div>
  );
}

//render your react application
ReactDOM.render(
    <VerySimpleComponent />,
    document.querySelector('#app')
);