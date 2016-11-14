var domain = require('domain');

var d = domain.create(), server;

d.on('error', function(err) {
    console.error("Domain has caught %s", err);
});

d.run(function() {
    // d.enter();

        setTimeout(function() {
            ERROR();
        }, 1000);

    //d.exit();
});

