'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8025', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var app = new WebpackDevServer(webpack(config));
app.listen(8025, function(){
	console.log('start server：http://localhost:8025')
});