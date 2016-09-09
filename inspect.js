var util = require('util');

var obj = {
    a: 5,
    b: 6
};
obj.self = obj;

console.log( util.inspect(obj) );