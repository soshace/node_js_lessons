// http://127.0.0.1:3000/echo?message=Hello -> Hello

var http = require('http');

var server = new http.Server(function(req, res) {
    console.log( req.method, req.url);
});

server.listen(3000, '127.0.0.1');