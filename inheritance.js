class Animal {
    constructor(_name) {
        this.name = _name;
    }
    walk() {
        console.log(this.name, ' is walking');
    }
    eat() {
        console.log(this.name, ' is eating');
    }
    drink() {
        console.log(this.name, ' is drink');
    }
}

class Rabbit extends Animal {
    constructor() {
        super('rabbit');
    }
    jump() {
        console.log('rabbit is jumping');
    }
}

class Cat extends Animal {
    constructor() {
        super('cat');
    }
    meow() {
        console.log('cat is meowing');
    }
}

const cat = new Cat();

const rabbit = new Rabbit();

cat.eat();

cat.meow();

rabbit.jump();

rabbit.drink();