var url = require('url');

module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);

    console.log("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
        var message = urlParsed.query.message;
        console.log("Echo: " + message);
        res.end(message);
        return;
    }

    console.log("Unknown URL");

    res.statusCode = 404;
    res.end('Not Found');
};

