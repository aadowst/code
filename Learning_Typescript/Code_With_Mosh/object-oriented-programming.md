_Creating Classes_

use the class keyword then a name in PascalCase
need properties and a constructor
methods can also be included

Example:
```
class Account {
	readonly id: number;
	owner: string;
	balance: number;
	nickname?: string;

	constructor(id: number, owner: string, balance: number){
		this.owner = owner
		//continue
	}

	deposit(amount: number) : void {
		if (amount <= 0) throw new Error('Invalid amount')
		else this.balance +=amount
	}
}

_Creating Objects_

define a variable and set it equal to new ClassName(), passing in the required parameters

the typeof operator will always return "object" even if the object is an instance of a class
in a type guard, use the instanceof operator, which returns a boolean (ex:  if(account instanceof Account){//code goees here})

_Read-only and Optional Properties_

prefix properties in a class as readonly (see line 10)
properties can be made optional by putting a question mark before their name (see line 13)

_Access Control Keywords_

Access modifiers (written before property or method w/in a class):  

	a. public (default):  properites can be modified directly
	
	b. private:  properties can only be accessed from within the class (i.e. using a class method). By convention, these properties are prefixed with "_". This is useful for preventing properties from being modified, but also prevents them from being viewed outside class. Solution? Include getters/setters. Private methods cannot be inherited
	
	c. protected:  can be accessed w/in class but not w/out. Unlike private methods, protected methods can be inherited. They can result in coupling, so limit their use.

	_Parameter Properties_

	Instead of declaring class properties separately from the constructor that uses them, properties can be introduced w/in the constructor parameters. Since optional parameters don't show up in the constructor they're still listed at top

Example:
``
class Account {
	//readonly  id: number;
	//owner: string;
	//private _balance: number;
	nickname?: string

	constructor(
		public readonly id: number, 
		public owner: string, 
		private _balance: number){
		}
}
```

_Getters and Setters_

Getters are prefixed with get. The are a special method that returns value of a property, but are read only
Setters are prefixed with set. They allow a property to be set, if it passes the logic in the method

Example:
```js

//using a method to get a private property
getBalance(): number {
	return this._balance
}
console.log(account.getBalance())

// using a getter (preferred)
get balance(): number {
	return this._balance
}
console.log(account.balance) //will work
account.balance += 1000 //won't be allowed

//using a setter
set nickname(name: string){
	if(name.length < 2>) throw new Error('Nicknames must be at least 3 characters')
	this.nickname = string
}

account.nickname("$$") //will throw error, since it doesn't pass logic in the setter
account.nickname("emergency fun") //will work
```

_Index Signatures_

Used to create properties dynamically
format is [name: nameType]: propertyType  (ex: [seatNumber: number]: PersonObject )
this allows for type safety when setting the values for these properties (ex: seat.FrontLeft: idNumber wouldn't work, because the property is a string instead of a number and the value is a number instead of an object)

```js
class SeatAssignment {
	[seatNumber: string]: string
}

let stadiumSeats = new SeatAssignment();
stadiumSeats.A1 = "Adrian"
stadiumSeat.A2 = "Rose"
//squarebrackets can also be used
stadiumSeats["A3"] = "Ashley"
```

_Static Members_

Static properties/methods belong to a class (not an instance of a class). All instances of the class have access to the static property
Prefix static is used to define the property/method
when accessing the property/method, the class name is used.
Should be paired with getters/setters

```js
class Ride {
	private static _activeRides: number = 0

	start(){ Ride._activeRides++}
	stop(){ Ride._activeRides--}

	static get activeRides(): number{
		return Ride._activeRides
	}
}
```

_Inheritance_
Notes:

	The parent class is also referred to as base or super class

	The child class is also referred to as the derived or sub class

This child class uses the 'extends' keyword to inherit from the parent
If the child doesn't have any extra properties, skip the constructor
Else:

	Properties that the child inherits from the parent don't need an access modifier (they inherit them)

	The constructor of the child class needs to list the parent parameters

	The super() method needs the inherited parameters to be passed to it

As a best practice, each class should be in its own file

Example:
```js
class Person{
	constructor(public firstName: string, public lastName: string){}
	get fullName(){ return this.firstName + ' ' + this.lastName	}
	walk(){ console.log("walking");	}
}

class Student extends Person{
	constructor(public studentId: number, firstName: string, lastName: string){
		super(firstName, lastName)
	}
	takeTest(){ console.log("I wish I studied more"); }
}

class Teacher extends Person {
	override get fullName(){ return "Professor " + super.fullName}
}
```

_Method Overriding_

To access a method from the parent, the 'super' keyword is used
The 'override' prefix is used when the child method overrides the parent (see Teacher class above), but the connection between the two methods is maintained.
Method overriding w/o the 'override' prefix is allowed, but discouraged. To force use of the keyword, in tsconfig.json, under Type Checking, comment in noImplicitOverride

_Polymorphism_

The form of an object can based on it being a parent or child.
The same method can be called on everything within the class or subclass (assuming they share the relevant properties/methods)

_Open-Closed Principal_

Classes should be open to being extended, but closed to being modified (because modifying a parent can have unexpected downstream effects)
(Note:  this isn't possible 100% of the time, but is a good goal)

_Abstract Classes and Methods_

Abstract classes can only be extended (not instantiated themselves)
Abstract methods cannot be executed. Do not need to include the body of the method (i.e. can leave out curly braces), but return type still required

```js
abstract class Shape {
	constructor(public color: string){}
	abstract render(): void
}

class Circle extends Shape {
	constructor(public radius: number, color: string){ super(color) }
	override render(): void { console.log("rendering a circle");	}
}
```

_Interfaces_

An interface is the shape of an object.
In C#, the name of the intervace is prefixed with I (ex: ICalendar)
Is purely used in TS
Interfaces are better to use than an abstract class, if there is no logic required. All interfaces do is list the properties/methods that must be included (w/o any conditions on them.)
Interfaces can be extended

Classes that will be instantiated use the 'implements' keyword to use interface

Interfaces and type aliases can be used interchangibly, but interfaces are used by convention

Notes: interfaces result in less JS code, but aren't availabe at run time, so you can't use them in logic:   if(x instance of I)

Example:
```js
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
```