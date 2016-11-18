// supervisor -- server.js --port=3000

console.log(process.env.HOME);

var http = require('http');

var opts = require('optimist').argv;

http.createServer(function(req, res) {

    if (process.env.NODE_ENV == 'production') {
        // optimization
    } else if (process.env.NODE_ENV == 'development') {
            // additional debugging output

        }

    res.end("The server is running!");

}).listen(opts.port);