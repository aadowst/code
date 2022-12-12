_Introduction_

Generics are common, reusable solutions for allowing multiple type alias to share a general structure

_Generic Classes_

Generic classes in TS are equivalent to template classes in C++
"<T>" used to indicate the template/generic (although any letter/string could be used)
Multiple generic classes can be used in the same class
Also, the compiler can infer the types based on how an instance is initialized

Example:
```js
class KeyValuePair<T> {
	constructor(public key: T, public value: string){}
}

let pair = new KeyValuePair<string>("1", "apple")
let pair2 = new KeyValuePair<number>(2, "banana")

class IdCard<I, B>{
	constructor(public id: I, public birthday: B){}
}
let myDate = new Date()
let myCard = new IdCard<number, Date>(1234, myDate)
let yourCard = newIdCard<string, string>("ABC123", "7/1/82")
let thirdCard = newIdCard(5678, "12/11/83")
```

_Generic Functions_

Use generic type parameter(s) to crete a reusable function
Functions can be stand alone or be class methods

Example:
```js
function wrapInArray<T>(value: T){
	return [value]
}

class ArrayUtils {
	static wrapInArray<T>(value: T){
	return [value]
	}
}
let numberArray = ArrayUtils.wrapInArray(num)

```

_Generic Interfaces_

Interfaces work in a similar fashion

```js
// common interface for response for API call to different endpoints
// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T>{
	data: T | null,
	error: string | null
}

interface User {username: string}
interface Product {title: string}

function fetch<T>(url: string): Result<T>{
	//insert code
	return {data: null, error: null}
}

let result = fetch<User>('url')  // passing in the User interface means result.data has .username property while passing in a Product interface would yield result.data.title

```

_Generic Constraints_

To limit the types of objects that can be passed to a generic function, use extends keyword:

	1. list the accepted types/interfaces (e.g IPerson)

	2. pass a shape object (input types must conform to the shape)

	3. pass a object.

```js
//value must be type number or string or IPerson interface
function echo<T extends number | string | IPerson>(value: T): T { return value}

//value must be an object that has a name property
function sayHi <T extends {name: string}>(value: T): string {return "Hi, " + value.name}

//Suppose there is a Person class with a isBirthday property. Instances of this class (or anything that extends the class) can be passed to the function
function sayHappyBirthday<T extends Person>(value: T): void {
	if(value.isBirthday === true) console.log("Happy Birthday!!!")
}

class Child extends Person {
}

sayHappyBirthday(new Child(true))
```

_Extending Generic Classes_

If a generic class is extended, the parameters for the extended class need to be specified. These could be fully generic, a generic with restrictions, or a concrete type.

```js
// Product is one of a variety of interfaces (others could include Users, ShoppingCarts, etc.)
interface Product {
	name: string;
	price: number;
}
// Store class can be used for any of the interfaces
class Store<T>{
	protected _objects: T[] = []

	add(object: T): void {
		this._objects.push(object)
	}
}

//pass along the generic type between parent/child
class CompressibleStore<T> extends Store<T>{
	compress(){}
}

//restrict the generic type in child (to avoid compilation error in child's method)
class SearchableStore<T extends { name: string }> extends Store<T>{
	search(name: string): T | undefined {
		return this._objects.find(obj => obj.name === name)
	}
}

//fix the generic type (i.e. set it to specific type)
class ProductStore extends Store<Product>{
	filterByCategory(category: string): Product[]{
		return this._objects.filter(item => item.category === category)
	}
}
```

_The keyof Operator_

Consider a generic method is used for the Store class. When the method is called on an instance, both a property and a value are specified. An object that matches (or undefined) are returned. 

To prevent the method from being called with non-existant properties (which would cause a crash), specify that the property parameter is one of the keys ("keyof") the class T. Now the compiler can check the keys of the object and throw an error if specified property doesn't exist for T

```js
class Store<T>{
// other code omitted (see above)

	//method finds objects that have property to be specified with a value to be specified
	find(property: keyof T, value: unknown) : T | undefined{
		return this._objects.find(obj => obj[property] === value)
	}
}

	// if T is Product, then keyof returns 'name' | 'price' | 'category'
let myStore = new Store<Product>
myStore.find("name", "some name")
myStore.find("price", 20)
myStore.find("title", "some title") //would throw an error, since Product doesn't have a title property
```

_Type Mapping_

Type mapping is basing a type on another type (including generic types)
It uses the "in" and "keyof" keywords to iterate over all of the keys (i.e. properties) of type
Each key can be modified in the new type (e.g. made readonly)

```js
interface Product {
	name: string;
	price: number;
}

type ReadOnlyProduct = {
//set each property of Product class to be readonly
	readonly [Key in keyof Product]: Product[Key]
}

//apply same logic to any type
type ReadOnly<T> = {
	readonly [Key in keyof T]: T[Key]
}
	let oneUser : ReadOnly<User> = {/*specify properties and values */}

//make all properties optional
type Optional<T> = {
	[Key in keyof T]?: T[Key]
}
//make all properties nullable
type Nullable<T>= {
	[Key in keyof T]: T[Key] | null
}


```