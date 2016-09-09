require('./user');

var tim = new user.User("Tim");
var tom = new user.User("Tom");

tim.hello(tom);