var User = require('./user');

function run() {
    var tim = new User("Tim");
    var tom = new User("Tom");

    tim.hello(tom);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}