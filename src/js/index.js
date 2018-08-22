//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';

console.log('Basename: ', process.env.BASENAME);

//render your react application
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);