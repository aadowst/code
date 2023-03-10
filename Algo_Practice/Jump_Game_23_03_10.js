// https://leetcode.com/problems/jump-game

// Runtime:  61 ms (beats 98.47%)
// Memory:  46.9 MB (beats 35.55%)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let canJumpTo = 0;
	for(let i = 0; i < nums.length; i++){
			if(canJumpTo >= nums.length - 1) return true
			if(nums[i] === 0){
					if(canJumpTo <= i) {
							return false
					}
			} else {
					canJumpTo = Math.max(canJumpTo, i + nums[i])
			}
	}
	return true
};