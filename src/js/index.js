import React from 'react';
import ReactDOM from 'react-dom';

// Add CSS files to bundle
import { App } from './components/app';
// Add CSS files to bundle
require('../styles/app.scss');

// Render application to DOM
ReactDOM.render(
    <App />,
    document.getElementById('app')
);