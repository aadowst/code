Redux is based in functional programming
Functional program is about decomposing problems into small components that take don't mutate data and can be combined in to larger systems
JS is a multi-paradigm language, so it is not purely functional
In JS, functions are first-class citizens, which means they can be:  assigned to a variable, passed as an argument, and returned from other functions
Higher order functions take functions as arguements and/or return functions. Examples:  .map() and setTimeout()
Function composition:  use small, reusable functions that call each other or can be chained.

_Using lodash_
npm i lodash
import the functional programming directory by requiring it
initialize a variable as pipe() function with the desired functions as arguments in the order they should be used
call the variable, passing in the input

```js
const fp = require("lodash/fp")
const pipe = fp.pipe()

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()
const transform = pipe(trim, toLowerCase, wrapInDiv)

let input = "    JavaScript    "
const result = transform(input)
```

_Currying_

Currying is a process in which one function that takes multiple arguments can be transformed into a series of functions that each take one argument. 
All but the last functions return functions.
Can be done with traditional functions and arrow functions
It is easy to convert between traditional anonymous functions and Curryed arrow functions. Just remove the parentheses and replace the commas between paramenters with fat arrows
```js
(a,b) => a + b  // trad anonymous function
a => b => a + b  // Curryed
```

```js
// original function
function addOriginal(a,b) {
	return a + b
}

// Currying with tradtional functions
function addCurry(a){
	return function(b){
		return a + b
	}
}

// Currying with arrow functions (works same as above)
const addCurryArrow = a => b => a + b 

```

_Pure Functions_

pure functions always return the same output when given the same input
they don't use random values, datetime or don't affect global state (DOM, files, db, etc)
they also don't mutate the parameters or depend on global variables, because these can change
reducers need to be pure. other functions in a web app not necessarily so
pure functions are cache-able, so every time they are run, result can be saved to a cache (elminating the need for expensive function calls)

_Immutability_

In a pure functional language, once an object has been created, it cannot be changed. JS is not purely functional, because arrays and objects can easily be mutated
Pros:  Immutability makes functions more predictable, makes it easier to detect changes, and allows for functions to be run concurrently (since neither one should make changes, thus the other is completely indep)
Cons:  performance can be slower (if dealing with thousands of objects), because new objects need to be created everytime a change needs to be made, uses more memory to do the copying (unless an immutabilty library is used)

Immuatability libraries use structural sharing, which is a way common properties between objects are shared rather than having each get its own copy

_Updating Objects_

Two methods (that make shallow copies): 

	1. use Object.assign(), which takes an empty object as its first argument, an object to be copied as it second, and any values to be updated or added as the thrid
	2. use spread operator to copy original properties and then updated them

To make a deep copy:  use the spread operator to make a shallow copy, but assign new objects for any nested objects. Then use the spread operator to copy the contents of a nested object, making changes if desired

```js
const person = { name:  "Adrian" , address: {city: "Seattle", country: "USA"}}
const shallowCopy1 = Object.assign({}, person, {name: "Adrian D.", favoriteColor: "blue"})
const shallowCopy2 = {...person, name: "Ad", numFingers: 10}
const deepCopy = {
	...person,
	name: "Adrian D.",
	address: {
		...person.address,
		country: "United States"
	}
}
```


_Updating Arrays_

To add item(s) at the start or end of an array, the spread operator can be used
To add items(s) at a specific position, use spread and slice(), indicating the index at which the items are added
To remove item(s), use filter()
To update items, use map()

```js
const numbers = [1,2,4]
// Adding
const addedAtEnd = [...numbers, 5]
const index = numbers.indexOf(2) + 1  //to add after the 2. to add before the 2, omit the +1
const addedInMiddle = [...numbers.slice(0,), 3, ...numbers.slice(index)]
// Removing
const removingOdds = numbers.filter(n => n%2 === 0)
// Updating
const updated = numbers.map(n => n === 1 ? 0 : n)
```

_Enforcing Immutability_

Libraries for enforcing immutability:  Immutable, Immer, Mori

*Immutable*
to install Immutable.js:  npm i immutable
in index.js, import { Map } from immutable
to access information about immutable objects, call the get() method on the object and pass in the name of the key
to 'update' an object (i.e. make a new copy with change(s)), call the set() method
when working between object, likely the toJS() method needs to be called on an object, so it can be converted to a plain js object
```js
import { Map } from "immutable";
let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);
console.log(book.toJS());
```

*Immer*
to install:  npm i immer
in index.js, import { produce } from immer
produce takes two arguments:  the original object and an arrow function that show the changes that will be made to its copy

```js
function publish(book) {
  return produce(book, newBook => {
		newBook.isPublished = true;
	})
}

let newBook = publish(book);
console.log(book);
console.log(newBook);
```
