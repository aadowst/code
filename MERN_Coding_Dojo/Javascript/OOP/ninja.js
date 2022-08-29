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

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("If one is arguing with a fool, then there are two.");
    }
}

const awesomeAdrian = new Sensei("Awesome Adrian");
awesomeAdrian.speakWisdom();
awesomeAdrian.showStats();
