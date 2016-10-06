var http = require('http');

var server = new http.Server(function(req, res) {

    /* request processing */

}).listen(3000);

setTimeout(function() {
    server.close(function () {
        process.exit();
    });
},2500);

setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);