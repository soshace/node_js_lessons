var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url == '/') {

        fs.readFile('index.html', function(err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("A server error occurred!");
                return;
            }

            res.end(info);
        });

    }

}).listen(3000);