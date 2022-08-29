//this models a collectible card game. card are either units or effects.

class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
        }
        else{
            console.log("target must be a unit")
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, targetStat, magnitude){
        super(name, cost);
        this.text = text;
        this.targetStat = targetStat;
        this.magnitude = magnitude;
    }
    playEffect(target){
        if(target instanceof Unit){
            if (this.targetStat = "resilience"){
                target.resilience += this.magnitude;
            }else if(this.targetStat = "power"){
                target.power += this.magnitude;
            }else{
                console.log("this stat doesn't exist")
            }
        }
        else{
            console.log("target must be a unit")
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(redBeltNinja.resilience);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "	increase target's resilience by 3", "resilience", 3);
hardAlgorithm.playEffect(redBeltNinja);
console.log(redBeltNinja.resilience);

const blackBeltNinja = new Unit("Black Belt Ninja", 4,5, 5);

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandledPromiseRejection.playEffect(redBeltNinja);
console.log(redBeltNinja.resilience);

const pairProgramming = new Effect("Pair Programming", 3,"increase target's power by 2", "power", 2 );
pairProgramming.playEffect(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja.resilience);