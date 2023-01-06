// https://leetcode.com/problems/permutations

// Runtime:  85 ms (beats 73.56%)
// Memory:  45.4 MB (beats 27.18%)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUsingFilter = function(nums) {
	let permutations = []

	function generatePermutations(subArray = [], remainingNums = nums){

			if(subArray.length === nums.length){
					permutations.push([...subArray]) // must use spread operator to create a shallow copy rather than a reference
					return
			}
			for(const num of remainingNums){
					subArray.push(num)
					const filteredNums = remainingNums.filter(element => element !== num)
					generatePermutations(subArray, filteredNums)
					subArray.pop()
			}

	}
	generatePermutations()
	return permutations
};

// Runtime:  112 ms (beats 48.74%)
// Memory:  45 MB (beats 58.73%)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUsingSlice = function(nums) {
	let permutations = []

	function generatePermutations(subArray = [], remainingNums = nums){

			if(subArray.length === nums.length){
					permutations.push([...subArray])
					return
			}
			for(let i = 0; i < remainingNums.length; i++){
					subArray.push(remainingNums[i])
					generatePermutations(subArray, [...remainingNums.slice(0,i), ...remainingNums.slice(i+1)])
					subArray.pop()
			}

	}
	generatePermutations()
	return permutations
};