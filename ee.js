// Demo of the simpliest usage of EE  
// arguments are passed along the chain 
// handlers are triggered in the same order in which the designated  

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('error', function() {
    
});

server.emit('error');