var util = require('util');

// Parents
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log("Running " + this.name);
};

// Child
function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
    console.log("Jumping " + this.name);
};

// Usage
var rabbit = new Rabbit("rabbit");
rabbit.walk();
rabbit.jump();
