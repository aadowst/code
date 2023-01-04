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
const result = add10(2) // returns 12

// better usage
const sameResult = addCurry(10)(2) // the Curry

console.log(addCurryArrow(10)(2))