// from hackerrank.com
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

function plusMinus(arr) {
	const total = arr.length
	let positive = 0;
	let negative = 0;
	let zero = 0;
	for(let i = 0; i < total; i++){
			if(arr[i] <  0) negative++;
			else if(arr[i] == 0) zero++;
			else positive++
	}
	const posRatio = (positive/total).toFixed(6)
	const negRatio = (negative/total).toFixed(6)
	const zeroRatio = (zero/total).toFixed(6)
	console.log(posRatio)
	console.log(negRatio)
	console.log(zeroRatio)
}