var phrases;
exports.connect = function() {
    phrases = require('./en');
};

exports.getPhrase = function(name) {
    if (!phrases[name]) {
        throw new Error("There is no such a phrase: " + name);
    }
    return phrases[name];
};