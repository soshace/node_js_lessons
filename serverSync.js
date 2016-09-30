var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;

    if (req.url == '/') {

        try {
            info = fs.readFileSync('index.html');
        } catch(err) {
            console.error(err);
            res.statusCode = 500;
            res.end("A server error occurred ");
            return
        }

        res.end("info");

    } else { /*404 */ }

}).listen(3000);
