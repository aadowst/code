// from https://leetcode.com/problems/valid-parentheses/

// Comment:  the arrays solution below is faster, but I think more likely to have an issue (esp. if symbols are being manually added or removed.)
// Runtime: 106 ms(faster than 43.22%)
// Memory Usage: 42.3MB (less than 76.55%)
var isValidObject = function (s) {
	const brackets = { '(': ')', '{': '}', '[': ']' }
	let bracketStack = []
	for (character of s) {
		if (Object.hasOwn(brackets, character)) {
			bracketStack.push(brackets[character])
		} else {
			if (bracketStack.length === 0) return false
			const removed = bracketStack.pop()
			if (removed !== character) return false
		}
	}
	return bracketStack.length == 0 ? true : false
}

// Runtime: 98 ms(faster than 58.00%)
// Memory Usage: 42.3MB (less than 69.35%)
var isValidArrays = function (s) {
	const openBrackets = ['(', '{', '[']
	const closeBrackets = [')', '}', ']']
	let bracketStack = []
	for (bracket of s) {
		if (openBrackets.includes(bracket)) {
			bracketStack.push(openBrackets.indexOf(bracket))
		} else {
			const removed = bracketStack.pop()
			if (removed !== closeBrackets.indexOf(bracket)) return false
		}
	}
	return bracketStack.length == 0 ? true : false
}

console.log(isValid("()"))

