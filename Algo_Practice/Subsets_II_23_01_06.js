// https://leetcode.com/problems/subsets-ii/submissions



// Runtime:  121 ms (beats 25.15%)
// Memory:  44.9 MB (beats 34.97%)
// Comment:  slower but less memory
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDupBacktracking = function(nums) {
	const subsets = []
	let subset = []
	let added = new Set()
	nums.sort((a,b) => a-b)
	function generateSubsets(subset, index){
			if(index >= nums.length) {
					let string = subset.toString()
					if(added.has(string)) return
					added.add(string)
					subsets.push([...subset])
					return
			}
			subset.push(nums[index])
			generateSubsets(subset, index + 1)
			subset.pop()
			generateSubsets(subset, index + 1)
	}
	generateSubsets(subset, 0)
	return subsets
};

// Runtime:  99 ms (54.97%)
// Memory:  44.9 MB (28.47%)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDupDFS = function(nums) {
	const subsets = []
	let subset = []
	let added = new Set()
	nums.sort((a,b) => a-b)
	function generateSubsets(subset, index){
			if(index >= nums.length) {
					let string = subset.toString()
					if(added.has(string)) return
					added.add(string)
					subsets.push([...subset])
					return
			}

			generateSubsets([...subset], index + 1)

			generateSubsets([...subset, nums[index]], index + 1)
	}
	generateSubsets(subset, 0)
	return subsets
};