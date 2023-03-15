// https://leetcode.com/problems/jump-game-ii/

// Runtime:  63 ms (beats 88.86%)
// Memory:  43.6 MB (beats 82.95%)
// Comment:  refactored to improve readability. Same basic strategy as following solution. Slightly slower performance, because of for loop structure

var jump = function(nums) {
	const endIndex = nums.length - 1
	let jumpCount = 0
	let jumpStart = 0
	let jumpEnd = 0
	for(let i = 0; i < endIndex; i++){
			jumpEnd = Math.max(jumpEnd, nums[i] + i)
			if(i >= jumpStart){
					jumpCount++
					jumpStart = jumpEnd
			}
	}
	return jumpCount
};

// Runtime:  56 ms (beats 98.16%)
// Memory:  44.2 ms (beats 34.80%)
// Strategy:  greedy

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	const endIndex = nums.length - 1
	let jumpCount = 0
	let jumpStart = -1
	let jumpEnd = 0
	for(let i = 0; jumpEnd < endIndex; i++){
			if(i > jumpStart){
					jumpCount++
					jumpStart = jumpEnd
			}
			jumpEnd = Math.max(jumpEnd, nums[i] + i)
	}
	return jumpCount
};

// Runtime:  194 ms (beats 22.91%)
// Memory: 45.2 MB (beats 16.37%)
// Strategy:  dynamic programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var jumpDP = function(nums) {
	const dpArray = Array(nums.length).fill(Infinity)
	const endIndex = nums.length - 1
	dpArray[endIndex] = 0
	for(let jumpStart = endIndex - 1; jumpStart >= 0; jumpStart--){
			let jumpDistance = nums[jumpStart]
			for(let jumpEnd = jumpStart + jumpDistance; jumpEnd >= jumpStart; jumpEnd--){
					if(jumpEnd > endIndex) continue
					dpArray[jumpStart] = Math.min(dpArray[jumpStart], dpArray[jumpEnd] + 1)
			}
	}
	return dpArray[0]
};