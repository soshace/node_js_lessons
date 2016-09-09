var user = require('./user');

function run() {
    var tim = new user.User("Tim");
    var tom = new user.User("Tom");

    tim.hello(tom);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}