'use strict';
const config = require('./webpack.config');
const express = require('express');
const webpack = require('webpack');
const compression = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const favicon = require('serve-favicon');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(helmet());
app.use(compression());
app.use(favicon(__dirname + '/favicon.ico'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/public/css/style.css', function(req, res){
  res.sendFile(__dirname + '/public/css/style.css');
});

app.get('/public/js', function(req, res){
  res.sendFile(__dirname + '/public/js');
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
