// from hackerrank.com

// Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k = (n + 1)/2 . You need to find the lexicographically smallest zig zag sequence of the given array.

function processData(input) {
	const middle = Math.floor(input.length / 2);
	let max = input[middle]
	let min = input[0]

	var swap = function (a, b) {
		console.log("swap")
		const temp = input[a]
		input[a] = input[b]
		input[b] = temp
	}
	for (let i = 0; i < input.length; i++) {
		if (input[i] > max) {
			swap(i, middle)
			max = input[middle]
		} else {
			if (i < middle) {
				if (input[i] < min) {
					swap(i, 0)
					min = input[0]
				}
				const nextValue = input[i + 1]
				if (input[i] > nextValue) {
					swap(i, i + 1)
				}
			}
			else if (i > middle) {
				if (input[i] < min) {
					swap(i, input.length - 1)
					min = input[input.length - 1]
				}
				const nextValue = input[i + 1]
				if (input[i] < nextValue) {
					swap(i, i + 1)
				}
			}
		}
	}
}