// from:  https://leetcode.com/problems/climbing-stairs/

// Runtime:  137 ms (faster than 5.64%)
// Memory Usage:  42 MB (less than 40.75%)
var climbStairs = function(n, memo = {}) {
	if( n <= 2 ) return n
	if(n in memo) return memo[n]
	memo[n] = climbStairs(n - 1, memo) + climbStairs(n -2, memo)
	return memo[n]
};

var climbStairsFaster = function(n) {
	let lowerStep = 1
	let higherStep = 1
	for(let i = 1; i < n; i++){
		const temp = lowerStep
		lowerStep = lowerStep + higherStep
		higherStep = temp
	}
	return lowerStep
}

console.log(climbStairsFaster())