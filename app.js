var express = require('express');
var routes = require('./routes');
var http = require('http');
var	request = require('request');
var	_ = require('underscore');
var	url = require('url');
var app = express();
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
var appEnv = { 'port' : 3000 };

console.log("ASF: 2017-02-14-10:24");

app.get('/', routes.index);

app.listen(appEnv.port, function(){
  console.log("ASF: Express server listening on port " + appEnv.port);
});