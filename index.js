var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var mongoURI = process.env. MONGOURI || require('./secrets').MONGOURI;

mongoose.connect(mongoURI);

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html/'});
});

server.listen(port, function(){
  console.log("Now listening on port...", port);
});
