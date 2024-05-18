

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} move at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed)
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);

console.log(rabbit);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

rabbit.run()