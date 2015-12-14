var React = require('react'),
    ReactDOM = require('react-dom'),
    App=require('./App.jsx');

var app=React.createElement(App,{items:['金酒','苦艾酒','汤力水']})
ReactDOM.render(app, document.getElementById('app'));

// 这种写法也行
// var React = require('react'),
//     ReactDOM = require('react-dom'),
//     App = React.createFactory(require('./App.jsx'));
    

// var app=App({items:['金酒','苦艾酒','汤力水']});
// ReactDOM.render(app, document.getElementById('app'));   
