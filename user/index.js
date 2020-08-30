var db = require('../db');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(db.getPhrase("Hello") + ", " + who.name);
};

console.log("user is required!");

module.exports = User;