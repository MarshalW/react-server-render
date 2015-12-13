"use strict";
require("babel-register");

var React = require('react');
var ReactDOM=require('react-dom/server');
var fs = require('fs');
var Handlebars=require('handlebars');
var browserify = require('browserify');
var babelify = require("babelify");

var App=require('./App.jsx');

// 创建模版
var source= fs.readFileSync('./src/index.html', "utf8");
var template = Handlebars.compile(source);

var content=ReactDOM.renderToString(React.createElement(App,{items:['金酒','苦艾酒','汤力水']}));

// 根据模版和数据，生成dist/index.html
fs.existsSync("./dist") || fs.mkdirSync("./dist");
fs.writeFileSync('./dist/index.html', template({content:content}));

browserify().transform(babelify).require("./src/browser.js", { entry: true })
    .bundle().pipe(fs.createWriteStream("./dist/bundle.js"));