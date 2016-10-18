var fs = require('fs');

fs.readFile("blablabla", {encoding: 'utf-8'}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});