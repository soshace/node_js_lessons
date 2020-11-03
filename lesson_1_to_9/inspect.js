const util = require('util');

const obj = {
    a: 5,
    b: 6,
};
obj.self = obj;

console.log(util.inspect(obj));

// prints { a: 5, b: 6, self: [Circular] }