var http = require('http');

var server = new http.Server(function(req, res) {

    /* request processing */

}).listen(3000);

setTimeout(function() {
    server.close();
}, 2500);
