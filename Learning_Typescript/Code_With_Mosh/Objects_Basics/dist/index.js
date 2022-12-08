"use strict";
let employee1 = {
    id: 1,
    name: "Adrian",
    retire: (date) => {
        console.log(date);
    },
};
let employee2 = {
    id: 2,
    name: "Rose",
    retire: (date) => {
        console.log(date);
    },
};
class Account {
    // nickname?: string;  //The setter at the end makes this optional property redundant
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount!");
        this._balance += amount;
    }
    calculateInterest() {
        //this code is only accessible w/in the class
    }
    get balance() {
        return this._balance;
    }
    set nickname(inputName) {
        if (inputName.length < 2)
            throw new Error('Nicknames must be at least 3 characters');
        this.nickname = inputName;
    }
}
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("I wish I studied more");
    }
}
class Teacher extends Person {
    get fullName() { return "Professor " + super.fullName; }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, "Adrian", "Rules"),
    new Teacher("Tony", "Brooks")
]);
//# sourceMappingURL=index.js.map