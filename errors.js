// Inheritance from Error

var util = require('util');

var phrases = {
    "Hello": "Hello",
    "world": "World"
};


function getPhrase(name) {
    if (!phrases[name]) {
        throw new Error("There is no such a phrase: " + name);
    }
    return phrases[name];
}


function makePage(url) {

    if (url != 'index.html') {
        throw new Error("There is no such a page");
    }

    return util.format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
}


var page = makePage('index.html');
console.log(page);