class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed =speed;
        this.strength = strength
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        this.sayName();
        console.log(`health is ${this.health}`);
        console.log(`speed is ${this.speed}`);
        console.log(`strength is ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }
}

const adrian = new Ninja("Adrian", 10);
adrian.sayName();
adrian.showStats();
adrian.drinkSake();
adrian.showStats();
