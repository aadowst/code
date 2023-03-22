// https://leetcode.com/problems/valid-parenthesis-string/

// Strategy:  Greedy with one for loop, instead of two (see following solution)
// Runtime:  50 ms (beats 95.26%)
// Memory:  41.3 MB (beats 93.16%)

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	let forwardCheck = 0 
	let reverseCheck = 0

	const OPEN = "("
	const CLOSE = ")"
	const ASTERISK = "*"

  const lastIndex = s.length -1
	for(let i = 0; i <= lastIndex; i++){
      const symbolFromLeft = s[i]
			if(symbolFromLeft === OPEN || symbolFromLeft === ASTERISK) forwardCheck++
			if(symbolFromLeft === CLOSE) forwardCheck--
			if(forwardCheck < 0) return false  // too many closed parentheses

    const symbolFromRight = s[lastIndex - i]
			if(symbolFromRight === CLOSE || symbolFromRight === ASTERISK) reverseCheck++
			if(symbolFromRight === OPEN) reverseCheck--
			if(reverseCheck < 0) return false  // too many open parentheses
	}

	return true
};

// Strategy:  Greedy with two loops (left to right & right to left)
// Runtime:  60 ms (beats 62.63%)
// Memory:  42 MB (beats 56.84%)

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	let forwardCheck = 0
	let reverseCheck = 0
	const OPEN = "("
	const CLOSE = ")"
	const ASTERISK = "*"

    // check from left to right to see if the sum of OPEN and ASTERISK always exceeds the number of CLOSE (if it fails, then there have been too many closing parentheses)
	for(let i = 0; i < s.length; i++){
            const symbol = s[i]
			if(symbol === OPEN || symbol === ASTERISK) forwardCheck++
			if(symbol === CLOSE) forwardCheck--
			if(forwardCheck < 0) return false  // too many closed parentheses
	}

    // check from right to left to see if the sum of CLOSE and ASTERISK always exceeds the number of OPEN (if it fails, then there are opening parentheses that remain unclosed)
	for(let j = s.length - 1; j >= 0; j--){
            const symbol = s[j]
			if(symbol === CLOSE || symbol === ASTERISK) reverseCheck++
			if(symbol === OPEN) reverseCheck--
			if(reverseCheck < 0) return false  // too many open parentheses
	}
    
	return true
};

//Strategy:  DFS with memo
// Runtime:  69 ms (beats 32.45%)
// Memory:  44.9 MB (beats 9.57%)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	const OPEN = "("
	const CLOSE = ")"
	let seen = new Map();
	return dfs(0,0)

	function dfs(index, startingOpenCount){
			if(startingOpenCount < 0) return false

			const key = `${index}, ${startingOpenCount}`
			if(seen.has(key)) return seen.get(key)

			let result
			let stillOpenCount = startingOpenCount
			for(let i = index; i < s.length; i++){
					const symbol = s[i]
					if(symbol === OPEN) stillOpenCount++
					if(symbol === CLOSE) stillOpenCount--

					if(stillOpenCount < 0) {
							result = false
							seen.set(key, result)
							return result
					}
					if(symbol === "*") {
							result = dfs(i + 1, stillOpenCount - 1) || dfs(i + 1, stillOpenCount) || dfs(i + 1, stillOpenCount + 1)
							seen.set(key, result)
							return result
							
					}
			}
			if(stillOpenCount == 0) result = true
			else result = false
			
			seen.set(key, result)
			return result
	}
};

// Comment:  DFS, times out on Leetcode
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	const OPEN = "("
	const CLOSE = ")"

	return dfs(0,0)

	function dfs(index, startingOpenCount){
			if(startingOpenCount < 0) return false
			let stillOpenCount = startingOpenCount
			for(let i = index; i < s.length; i++){
					const symbol = s[i]
					if(symbol === OPEN) stillOpenCount++
					if(symbol === CLOSE) stillOpenCount--
					if(stillOpenCount < 0) return false
					if(symbol === "*") {
							return dfs(i + 1, stillOpenCount - 1) || dfs(i + 1, stillOpenCount) || dfs(i + 1, stillOpenCount + 1)
					}
			}
			if(stillOpenCount == 0) return true
			return false
	}
};

// Comment:  fails on Leetcode, but not sure why

var checkValidString = function(s) {
	let stillOpenCount = 0
	let asteriskCount = 0
	const OPEN = "("
	const CLOSE = ")"
	const status = []
	for(let symbol of s){
			if(symbol === OPEN) stillOpenCount++
			if(symbol === CLOSE) stillOpenCount--
			if(symbol === "*") asteriskCount++
			if(asteriskCount + stillOpenCount < 0) return false  // too many closed parentheses
	}
	if(asteriskCount >= Math.abs(stillOpenCount)) return true
	return false
};