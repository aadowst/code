/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
	- .split(characterToSplitOn)
		- returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
	- .parseInt
		- given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split
*/

const test1V1 = '0.1';
const test1V2 = '1.1';
const expected1 = -1;

const test2V1 = '1.0.1';
const test2V2 = '1';
const expected2 = 1;

const test3V1 = '7.5.2.4';
const test3V2 = '7.5.3';
const expected3 = -1;

const test4V1 = '7.5.2.4';
const test4V2 = '7.5.2';
const expected4 = 1;

const test5V1 = '1.01';
const test5V2 = '1.001';
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = '1.01';
const test6V2 = '1';
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
	const v1Array = v1.split(".")
	const v2Array = v2.split(".")

	const minLength = Math.min(v1Array.length, v2Array.length)
	for (let i = 0; i < minLength; i++) {
		const v1Number = parseInt(v1Array[i])
		const v2Number = parseInt(v2Array[i])
		if (v1Number === v2Number) continue
		else if (v1Number < v2Number) return -1
		else return 1
	}
	if (v1Array.length == v2Array.length) return 0
	return v1Array.length < v2Array.length ? -1 : 1
}

console.log(compareVersionNumbers(test1V1, test1V2))
console.log(compareVersionNumbers(test2V1, test2V2))
console.log(compareVersionNumbers(test3V1, test3V2))
console.log(compareVersionNumbers(test4V1, test4V2))
console.log(compareVersionNumbers(test5V1, test5V2))
console.log(compareVersionNumbers(test6V1, test6V2))

