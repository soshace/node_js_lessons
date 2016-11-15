var domain = require('domain');
var fs = require('fs'), http = require('http');

var d = domain.create(), server;

d.on('error', function(err) {
    console.error("Domain has caught %s", err);
});

d.run(function() {

    server = new http.Server();

});

server.on('boom', function() {
    setTimeout(function() {
        fs.readFile(__filename, function() {
            ERROR();
        });
    }, 1000);
});

server.emit('boom');