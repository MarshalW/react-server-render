var React = require('react'),
    ReactDOM = require('react-dom'),
    App = React.createFactory(require('./App.jsx'));

ReactDOM.render(App({items:['金酒','苦艾酒','汤力水']}), document.getElementById('app'));   

