// original function
function addOriginal(a,b) {
	return a + b
}

// Currying
function addCurry(a){
	return function(b){
		return a + b
	}
}

// Currying with arrow functions (works same as above)
const addCurryArrow = a => b => a + b  // analagous to (a,b) => a + b

// simplisitic usage (would require many add# variables to be created)
const add10 = addCurry(10) // add returns a function that can be called
const sum = add10(2) // returns 12

// better usage
const sameResult = addCurry(10)(2) // the Curry

console.log(addCurryArrow(10)(2))

const pipe = require("lodash/fp/pipe")

let input = "    JavaScript    "

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()

// hard to read way of calling above functions on the input
const result = wrapInDiv(toLowerCase(trim(input)))

// using lodash
const transform = pipe(trim, toLowerCase, wrapInDiv)

// using a generalized wrap in function (so strings could be wrapped in spans, p tags, etc)
const wrap = (element, str) => `<${element}> ${str} </${element}>`

// the functions passed into pipe can only take one argument, so wrap needs to be Curryed

const wrapCurryed = element => str => `<${element}> ${str} </${element}>`
const transformToDiv = pipe(trim, toLowerCase, wrapCurryed("div"))



const wrapWithElement = element => str => `<${element}> ${str} </${element}>`