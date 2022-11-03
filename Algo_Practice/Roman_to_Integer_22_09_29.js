/*from Leetcode:  https://leetcode.com/problems/roman-to-integer/
Runtime: 203 ms(faster than 61.42%)
Memory Usage: 47.1 MB (less than 69.04%)
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	const characterValues = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1
	}
	let runningSum = 0;
		let previousValue = 0
		for(let i = s.length-1; i >= 0; i--){
			const currentValue = characterValues[s[i]]

			if(currentValue < previousValue) runningSum -= currentValue
			else runningSum += currentValue

			previousValue = currentValue
		}
		return runningSum
};

console.log(romanToInt("I"))