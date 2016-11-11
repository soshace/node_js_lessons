var http = require('http');
var fs = require('fs');

function handler(req, res) {
    if (req.url == '/') {

        fs.readFile('index.html', function(err, content) {

            if (err) throw err;
            res.end(content);
        });

    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }

}

var server = new http.createServer(function (req, res) {
    try {
        handler(req, res);
    } catch(err) {
        //error!
    }
});
server.listen(3000);