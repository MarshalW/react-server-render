"use strict";
require("babel-register");

var React = require('react');
var ReactDOM=require('react-dom/server');
var App=require('./App.jsx');


var content=ReactDOM.renderToString(React.createElement(App));
console.log(content);

content=ReactDOM.renderToStaticMarkup(React.createElement(App));
console.log(content);