const http = require('http');
const port = 1337;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    const url = req.url;
    if (url === '/text') {
        res.end("Hello from Server");
        return;
    }

    if (url === '/json') {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(`{"message": "Hello from Server"}`);
        return;
    }

    if (url === '/html') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(`<html><body><h1>Hello from Server</h1></body></html>`);
        return;
    }

    if (url === '/csv') {
        res.setHeader("Content-Type", "text/csv");
        res.writeHead(200);
        res.end(`name,email\n1,John Doe,john@example.com`);
        return;
    }
});

server.listen(port, host, function () {
    console.log('Web server is running on port 1337');
});