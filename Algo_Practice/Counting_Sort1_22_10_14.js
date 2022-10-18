// from hackerrank.com

// the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.


function countingSort(arr) {
	const freqArray = []
	for(let i = 0; i < 100; i++) freqArray.push(0)
	for(const element of arr) freqArray[element]++
	return freqArray

}