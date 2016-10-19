var fs = require('fs');

// fs.ReadStream nherits from stream.Readable
var stream = new fs.ReadStream("big.html");

stream.on('readable', function() {
    var data = stream.read();
    console.log(data);
});

stream.on('end', function() {
    console.log("THE END");
});

