import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log = console.error = console.warn = function() {}

ReactDOM.render(<App />, document.getElementById('root'));

