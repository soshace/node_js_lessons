var db = require('./db');

var User = require('./user');

function run() {
    var tim = new User("Tim");
    var tom = new User("Tom");

    tim.hello(tom);

    console.log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}