const http = require('http');
const fs = require('fs');
const util = require('util');
const port = 1337;
const host = 'localhost';

// EXAMPLE WITH CALLBACK

const server1 = http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
    if (err) {
        return res.status(500).end();
    }
    res.end(data);
    })
});

// EXAMPLE WITH PROMISE
const server2 = http.createServer(function (req, res) {
    // convert readFile into a promise based method
    const readFilePromise = util.promisify(fs.readFile);

    // use promise instead
    readFilePromise('index.html').then(data => {
        res.end(data);
    }).catch(error => {
        res.status(500).end();
    })
});

// EXAMPLE WITH ASYNC/AWAIT 
// add async to parent function
const server3 = http.createServer(async function (req, res) {
    // convert readFile into a promise based method
    const readFilePromise = util.promisify(fs.readFile);

    try {
        // wait for promise to resolve
        const data = await readFilePromise('index.html');
        res.end(data);
    } catch (error) {
        res.status(500).end();
    }
});

server3.listen(port, host, function () {
    console.log('Web server is running on port 1337');
});