var fs = require('fs');

// fs.ReadStream nherits from stream.Readable
var stream = new fs.ReadStream("noFile.html");

stream.on('readable', function() {
    var data = stream.read();
    if (data){
        console.log(data.length);
    }
    else {
        console.log('data is null')
    }
});

stream.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log("File not Found");
    } else {
        console.error(err);
    }
});
