function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

var tim = new User("Tim");
var tom = new User("Tom");

tim.hello(tom);