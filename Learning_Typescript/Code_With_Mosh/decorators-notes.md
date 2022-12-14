_Introduction_

Decorators are functions that apply to classes/members that change how they behave
Frequently used in Angular & Vue

TS does not have built-in decorators, so we have to make our own (or used those in Angular, etc)
Decorators are experimental features
In tsconfig.json, under Language and Environment, comment in experimentalDecorators

_Class Decorators_

Work similar to having a parent class that child class extends to get access to properties/methods
Decorator function gets called at runtime (even if class w/ decorator isn't instantiated)

```js
function Component(constructor: Function){
	console.log("Component decorator called");
	// added new property to the prototype for the constructor. All Components (incl. those with the decorator will have this prop)
	constructor.prototype.uniqueId = Date.now()
	constructor.prototype.insertInDOM = () => {
		console.log("Inserting the component in DOM");
	}
}

@Component
class ProfileComponent { }
```

_Parameterized Decorators_

Parameters can be passed to the decorator
The decorator function can return a function. Referred to as a decorator factory
The selector property can be applied to the component (corresponding to it's id or class)


```js
type ComponentOptions = {	selector: string }

function Component(options: ComponentOptions){
	return (constructor: Function) =>
	constructor.prototype.options = options
	// other code
}

@Component({selector: "#sidebar"})
class ProfileComponent {}
```

_Decorator Composition_

Decorators are applied in the reverse order that they are listed

_Method Decorators_

Method decorators can be used to modify the methods they are applied to 
They can run code before/after the original method
They also can modify how the original method works

The decorator function takes in 3 parameters. Not all are used in the function body, so make sure to comment out noUnusedParameters in tsconfig.json

To make the decorator flexible, its parameters are ...args (spead operator allows the number to vary) with type any
Note: fat arrow functions won't work here, because they don't have a value for 'this'

Example:
```js
function Log(target: any, methodName: string, descriptor: PropertyDescriptor){
	// use type assertion to assert original is a function (then intellisense will be able to suggest appropriate methods)
	// descriptor value is the method's code. This is saved as original
	const original = descriptor.value as Function
	// descriptor value can be modified
	descriptor.value = function(...args: any){
		console.log(("Before original method"));
		//calls the original function, passing in the args 
		original.call(this, ...args)
		console.log(("After original method"));
		
	}
}
class Person {
	@Log
	say(message: string): void {
		console.log("Person says " + message);
		
	}
}
```

_Accessor Decorators_

Accessors are getter/setters
The decorator goes on the getter/setter and needs to be defined outside the class
The parameters of the decorator are the same as the method decorators

Example:
```js
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
}
```

_Property Decorators_

Property decorators are functions that return a function that target the property
They can be used to change methods that exist on the property (such as getters/setters)

```js
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
```

_Parameter Decorators_

Not used that frequently (use case:  designing a framework for others to use)

```js
//in this example, parameters can be marked with Watch decorator, so that later all those that are watched could be used for additional functionality
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
```