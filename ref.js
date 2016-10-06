var http = require('http');

var server = new http.Server(function(req, res) {

    /* request processing */

}).listen(3000);

setTimeout(function() {
    server.close(function(){
    clearInterval(timer);
  });
}, 2500);

var timer = setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);
