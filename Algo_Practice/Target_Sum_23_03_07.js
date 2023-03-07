// https://leetcode.com/problems/target-sum

// Runtime:  172 ms (beats 88.50%)
// Memory:  49.8 MB (beats 42.95%)
// Comment:  Way faster than brute force, but uses more memory

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
	let seen = new Map()
	return recursive(0,0)

	function recursive(index, runningSum){
			if(index == nums.length){
					if(runningSum === target) return 1
					else return 0
			}
			const key = `${index},${runningSum}`
			if(seen.has(key)) return seen.get(key)
			const subtractFromRunningSum = runningSum - nums[index]
			const addToRunningSum = runningSum + nums[index]
			let currentCount = 0
			currentCount += recursive(index + 1, subtractFromRunningSum)
			currentCount += recursive(index + 1, addToRunningSum)
			seen.set(key, currentCount)
			return currentCount
	}
};

// Runtime:  2361 ms (beats 41.22%)
// Memory:  41.7 MB (beats 92.19%)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWaysBruteForce = function(nums, target) {
	let count = 0
	dfs(0,0)

	function dfs(index, runningSum){
			if(index == nums.length){
					if(runningSum === target) count++
					return
			}
			const subtractFromRunningSum = runningSum - nums[index]
			const addToRunningSum = runningSum + nums[index]
			dfs(index + 1, subtractFromRunningSum)
			dfs(index + 1, addToRunningSum)

	}

	return count
};