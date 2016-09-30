var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;

    if (req.url == '/') {

        info = fs.readFileSync('index.html');
        res.end(info);

    }

}).listen(3000);
