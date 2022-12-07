
_Type Aliases_

Defining the type for each individual object isn't DRY. 
Better to use a type alias to define a generic type that can be applied to multiple object instances
Example:
```
type Car = {
	make: string;
	model: string;
	year: number;
	drive: (time: number, speed: number) => number;
}

_Union Types_

To allow a variable/fn to be multiple types, create a union by putting | between each type
The varible/object will only have access to the methods that are common to all of the types (ex: toString)
In the body of a function, narrow the type to get access to the methods that are built into a subset of the types (ex: parseInt for strings)
Example:
```
function kgToLbs(weight:  number | string) : number {
	if(typeof weight === "number") return weight * 2.2
	else return parseInt(weight) * 2.2
}
```

_Intersection Types_

Intersections allow an object to be multiple types (instead of one type from multple options like union types)
They are created by putting & between the types
Example:
```
type Draggable = {
	drag: (newXCoordinate: number, newYCoordinate: number) => void
}

type Resizable = {
	resize:  (newWidth: number, newHeight: number) => void
}

type UIWidget = Draggable & Resizable

let textbox: UIWidget = {
	drag: (newXCoordinate: number, newYCoordinate: number) => {
		<insert code here>
	};
	resize: (newWidth: number, newHeight: number) => {
		<insert code here>
	};
}
```

_Literal Types_

Literal types have exact or specific values that are allowed (ex: #wings could be 12, 24, 36, etc)
the values for the literal are set like other types or as type aliases
Example:
```
let wings: 12 | 24 | 36;

type MetricDistance = 'm' | 'km'
let distanceToStore: Metric Distance;
```

_Nullable Types_
By default, TS won't allow a fn to be called with a null value
However, if you want to call a fn and pass in null/undefined (perhaps the fn expects the user to type in their name, but they skipped that section), then use null and/or undefined as union types in the parameter signature
Example:
```
function sayHi(nameInput: string | null | input): void {
	if(nameInput) console.log(`Hi there, ${nameInput}`)
	else console.log("Hello, stranger!")
}
```

_Optional Chaining_

Since some functions can return the desired type or null/undefined, optional chaining is used to check what was returned
These can be chained, since there might be options for the options for the options
Example:
```
type Customer = {
	id: number
	name: string;
	birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : customersArray.filter(customer => customer.id === id)
}

let customer = getCustomer(1)
console.log(customer?.name) /* since customer might be null, optional element access operator is used */
console.log(customer?.birthday?.getFullYear()) /* even if there is a customer, the birthday is still option, so they are chained */
```

This can also be used for function calls (only call them if allowed)

_Nullish Coalescing Operator_

Consider the JS code below
```
let speed = getUserInput()
let ride = {
	speed: speed || 30
}
```
The user can input a speed or the default of 30 can be used if speed is null (no input).
There is a potential issue, though. If the user enters 0, this is falsy, so 30 will be used
In JS, this could be avoided by checking if speed is null (speed: speed !== null ? speed : 30)
In TS, there is the nullish coalescing operator (??) , which works for both null and undefined values
It is similar to the ternary operator in that there are two options (inputed speed or 30 as a default)

Example:
```
let ride = { speed:  speed ?? 30}
```

_Type Assertions_

If the developer knows more about the type than the compiler, the 'as' keyword is used to assert
For example:  document.getElementbyId() will return an object of type HTMLElement, which is pretty generic
If we wanted to get the value of an input element, TS would throw an error, because HTMLElement's don't have a value property
Instead, we need to assert a more specific type, which will allow the desired properties/methods to be accessed.
Note:  the 'as' keyword doesn't do type conversion in TS (it does in C#), so program may crash if the returned value isn't of the type asserted

Other syntax is to use <T> syntax

Example:
```
let phone = document.getElementById("phoneInput") as HTMLInputElement
let birthday = <HTMLInputElement> document.getElementById("birthdayInput")
console.log(phone.value, birthday.valueAsDate)
```

_Unknown Type_

If a paramenter is listed as type any, then the compiler will not throw errors, if we call non-existent methods in a function.
Another solution is to use type unknown and pair it with type narrowing, so TS can infer what methods should be allowed based on the type guards
Example:
```
function render(document: unknown) {
	if(typeof document === "string"){
		document.toUpperCase()
	}
	if(document instanceof MyType){
		document.myTypeMethod()
	}
	return
}

_Never Type_

Represents values that never return (rarely used)
However, it allows the compiler to throw an error if in tsconfig.json, under Type Checking, allowUnreachable code is commented in and set to false
Example:
```
function monitorQueue(): never {
	while (true){
		//do something if there is a message in the queue
	}
}

monitorQueue()
nextFunction()
```
Without the never type, the compiler assumes the monitorQueue function will return something and the nextFunction will be reachable once it does
However, there is an infinite loop in monitorQueue.
We/the compiler might not notice nextFunction isn't reachable w/o the never type being declared

Another use case would be a function that's meant to throw an error if called. It won't return, which means code below it would be unreachable