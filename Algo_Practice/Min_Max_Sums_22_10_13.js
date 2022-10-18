// from hackerrank.com
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
	let min = arr[0];
	let max = arr[0];
	let total = 0;
	for(let digit of arr){
			if(digit < min) min = digit
			if(digit > max) max = digit
			total += digit
	}
	const minSum = total - max;
	const maxSum = total - min;
	console.log(minSum, maxSum);
}