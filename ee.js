// Demo of the simpliest usage of EE  
// arguments are passed along the chain 
// handlers are triggered in the same order in which the designated  

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request) {
    request.approved = true;
});

server.on('request', function(request) {
    console.log(request);
});


server.emit('request', {from: "Client"});

server.emit('request', {from: "Another Client"});