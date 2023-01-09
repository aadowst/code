// https://leetcode.com/problems/palindrome-partitioning/

// Runtime:  251 ms (beats 90.63%)
// Memory:  60.7 MB (beats 99.71%)
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
	const partitions = []
	let partition = []

	function dfs(index){
			if(index >= s.length){
					partitions.push([...partition])
					return
			}
			for(let end = index + 1; end<= s.length; end++){
					if(isPalindrome(s, index, end)){
							partition.push(s.slice(index, end))
							dfs(end)
							partition.pop()
					}
			}
	}
	dfs(0)
	return partitions
};

function isPalindrome(s, left, end){
	let right = end - 1
	while(left < right){
			if(s[left] !== s[right]) return false
			left++
			right--
	}
	return true
}

/**
 * @param {string} s
 * @return {string[][]}
 */

// Comment:  this was original attempt. wasn't able to get it fully working, but made decent progress

var partitionOriginal = function(s) {
	const partitions = []

	let partition = []
	let allPalindromes = false
	function generatePartitionsOriginal(start, end, numberPartitions, partition){


			if(numberPartitions = 0){
					if(isPalindromeOriginal(s.slice(start, end))) {
							partition.push(s.slice(start, end))
							return true
					}
					return false
			} else{
					for(let i = start + 1; i < end; i++){
							let leftSlice = s.slice(start, i)
							if(isPalindromeOriginal(leftSlice)){
									partition.push(leftSlice)
									if(generatePartitions(i, end, numberPartitions - 1)){
											partitions.push(partition)
									}
									partition.pop()
							}


					}
			}
	}

	for(let numberPartitions = 0; numberPartitions < s.length; numberPartitions++){
			generatePartitions(0, s.length, numberPartitions)
	}
	return partitions
};

function isPalindromeOriginal(string){
	if (string.length == 1) return true
	for(let i = 0; i < Math.floor(string.length/2) - 1; i++){
			if(string[i] !== string[string.length - 1 - i]) return false
	}
	return true
}