var domain = require('domain');

var d = domain.create(), server;

d.on('error', function(err) {
    console.error("Domain has caught %s", err);
});

d.run(function() {

    ERROR();
});

