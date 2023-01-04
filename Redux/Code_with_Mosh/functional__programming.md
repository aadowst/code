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
