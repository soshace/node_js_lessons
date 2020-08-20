var phrases = require('./en');

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log(phrases.who + ", " + who.name);
};

console.log("user is required!");

exports.User = User;