import { spreadElement } from "@babel/types";

function Component(constructor: Function){
	console.log("Component decorator called");
	// added new property to the prototype for the constructor. All Components (incl. those with the decorator will have this prop)
	constructor.prototype.uniqueId = Date.now()
	constructor.prototype.insertInDOM = () => {
		console.log("Inserting the component in DOM");
		
	}
}

@Component
class ProfileComponent {
}

//three parameters are needed to apply decorator to a method. Names for the parameters can vary, but see example below
// changing the descriptor value changes the method to which the decorator is applied (can completely rewrite it, but usually used to enhance what happens before/after the method is run)
function Log(target: any, methodName: string, descriptor: PropertyDescriptor){
	// use type assertion to assert original is a function (then intellisense will be able to suggest appropriate methods)
	const original = descriptor.value as Function
	descriptor.value = function(message: string){
		console.log(("Before original method"));
		//calls the original function, passing in the message
		original.call(this, message)
		console.log(("After original method"));
		
	}
}

function Capitalize(target: any, method: string, descriptor: PropertyDescriptor){
	const	 original = descriptor.get
	descriptor.get = function(){
		const result = original?.call(this)
		return (typeof result === "string") ? result.toUpperCase() : result
	}
}

class Person {
	constructor(public firstName: string, public lastName: string){}
	

	@Capitalize
	get fullName(){
		return `${this.firstName} ${this.lastName}`
	}

	@Log
	say(message: string): void {
		console.log("Person says " + message);
		
	}
}

let person = new Person("Adrian", "Dowst")
console.log(person.fullName);


function MinLength(length: number){
	return (target: any, propertyName: string) => {
		let value: string;
		const descriptor: PropertyDescriptor = {
			get() {return value},
			set(newValue: string){
				if(newValue.length < length) throw new Error(`${propertyName} should be at least ${length} characters long`)
				value = newValue
			}
		}
		Object.defineProperty(target, propertyName, descriptor)
	}
}

class User {
	@MinLength(4)
	password: string
	
	constructor(password: string){
		this.password = password
	}
}

type WatchedParameter = {
	methodName: string,
	parameterIndex: number
}

const watchedParameters: WatchedParameter[] = []

function Watch(target: any, methodName: string, parameterIndex:  number){
	watchedParameters.push({methodName, parameterIndex})
}

class Vehicle{
	move(@Watch speed: number){
	}
}