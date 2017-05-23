'use strict';
const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const rmt = require('./rmt.js').rmt;
const parser = require('./bbparser.js').parser;
const finishParse = require('./bbparser.js').finishParse;

app.use(compression());
app.use(helmet());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/rmt', function(req, res) {
  let output = rmt(req.body['team'], req.body['options']);
  if (req.body['format'] === 'html') res.send(finishParse(parser.parseString(output)));
  else res.send(output);
});

app.listen(port, function () {
  console.log(`Example app listening on port: ${port}`);
});
