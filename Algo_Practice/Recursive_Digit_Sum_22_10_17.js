// from hackerrank.com

// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:
// 9 + 8 + 7 + 5 = 29
// 2 + 9 = 11
// 1 + 1 = 2
// 2 is the super digit

function superDigit(n, k = 1) {
	let numberString = `${n}`
	let concatenatedString = numberString;
	for (let i = 1; i < k; i++) {
		concatenatedString += numberString
	}
	if (concatenatedString.length == 1) return parseInt(concatenatedString)
	let sum = 0;
	for (let j = 0; j < concatenatedString.length; j++) sum += parseInt(concatenatedString[j])
	return superDigit(sum)
}

console.log(superDigit(9875, 4))