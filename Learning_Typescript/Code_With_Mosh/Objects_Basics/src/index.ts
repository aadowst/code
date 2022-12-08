let employee1: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Adrian",
  retire: (date: Date) => {
    console.log(date);
  },
};

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 2,
  name: "Rose",
  retire: (date: Date) => {
    console.log(date);
  },
};

class Account {
	readonly id: number;
	owner: string;
	private _balance: number;
	// nickname?: string;  //The setter at the end makes this optional property redundant
	
	constructor(id: number, owner: string, balance: number){
		this.id = id;
		this.owner = owner;
		this._balance = balance
	}

	deposit(amount: number){
		if(amount <=0) throw new Error("Invalid Amount!")

		this._balance += amount
	}

	private calculateInterest(){
		//this code is only accessible w/in the class
	}

	get balance(): number {
		return this._balance
	}

	set nickname(inputName: string){
		if(inputName.length < 2)throw new Error('Nicknames must be at least 3 characters')
		this.nickname = inputName
	}
}

class Ride {
	private static _activeRides: number = 0

	start(){ Ride._activeRides++}
	stop(){ Ride._activeRides--}

	static get activeRides(): number{
		return Ride._activeRides
	}
}

class Person{
	constructor(public firstName: string, public lastName: string){}
	get fullName(){
		return this.firstName + ' ' + this.lastName
	}
	walk(){
		console.log("walking");
		
	}
}

class Student extends Person{
	constructor(public studentId: number, firstName: string, lastName: string){
		super(firstName, lastName)
	}
	takeTest(){
		console.log("I wish I studied more");
		}
}

class Teacher extends Person {
	override get fullName(){ return "Professor " + super.fullName}
}

function printNames(people: Person[]){
	for(let person of people){
		console.log(person.fullName)
	}
}

printNames([
	new Student(1, "Adrian", "Rules"),
	new Teacher("Tony", "Brooks")
])

abstract class Shape {
	constructor(public color: string){}
	abstract render(): void
}

class Circle extends Shape {
	constructor(public radius: number, color: string){ super(color) }
	override render(): void { console.log("rendering a circle");	}
}

abstract class Calendar {
	constructor(public name: string){}
	abstract addEvent(): void
	abstract removeEvent(): void
}

interface ICalendar {
	name: string;
	addEvent(): void;
	removeEvent(): void;
}

interface ICloudCalendar extends ICalendar {
	cloudSync(): void
}

class MyCalendar implements ICloudCalendar {
	constructor(public name: string){}
	addEvent(): void { //insert code
	}
	removeEvent(): void {
			//insert code
	}
	cloudSync(): void {
			//insert code
	}
}