var domain = require('domain');
var fs = require('fs'), http = require('http');

var d = domain.create(), server;

d.on('error', function(err) {
    console.error("Domain has caught %s", err);
});

server = new http.Server();

d.run(function() {

    d.add(server);

    console.log(server.domain);

});

server.on('boom', function() {
    setTimeout(function() {
        fs.readFile(__filename, function() {
            ERROR();
        });
    }, 1000);
});

server.emit('boom');