var db = require('./db');
db.connect();

var User = require('./user');

function run() {
    var tom = new User("Tom");
    var tim = new User("Tim");

    tom.hello(tim);

    console.log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}