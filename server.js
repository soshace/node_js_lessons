var http = require('http');

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

console.log("Server is running");

