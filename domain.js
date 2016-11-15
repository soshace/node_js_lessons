var domain = require('domain');
var fs = require('fs');
var d = domain.create(), server;

d.on('error', function(err) {
    console.error("Domain has caught %s", err);
});


d.run(function() {

    setTimeout(function() {
      fs.readFile(__filename, function() {
          ERROR();
      });
        }, 1000);


});

