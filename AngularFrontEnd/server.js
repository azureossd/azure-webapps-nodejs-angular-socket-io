var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
app.use('/', express.static(path.join(__dirname, '/UI')))
server.listen(process.env.PORT || 3001);