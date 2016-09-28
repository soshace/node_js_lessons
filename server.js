var http = require('http');
var debug = require('debug')('server');

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

debug("Server is running");

