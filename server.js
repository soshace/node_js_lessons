var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;

    if (req.url == '/') {
         fs.readFile('index.html', function (err, info) { // callback

            res.end('');
        });

    }

}).listen(3000);