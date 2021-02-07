const http = require('http');
const fs = require('fs');

const server = new http.Server();

server.on('request', (req, info) => {
    if (req.url == '/') {
        fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("A server error occurred ");
                return
            }

            res.end("info");
        });

    } else { /*404 */ }
});

server.listen(3000);