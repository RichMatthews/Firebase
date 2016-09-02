var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/welcome', function (req, res) {
  res.sendFile(__dirname + '/welcome.html');
});

app.get('/details', function (req, res){
  res.sendFile(__dirname + '/details.html');
});

app.get('/index.js', function (req, res){
  res.sendFile(__dirname + '/index.js');
});

app.listen(3000, function () {
});
