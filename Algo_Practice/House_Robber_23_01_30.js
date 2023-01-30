// https://leetcode.com/problems/house-robber/submissions/888276802/

// Runtime:  58 ms (beats 89.4%)
// Memory:  42.1 MB (beats 42.25%)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	let houseA = 0 // running total upto two houses before i (can add value of house at i to this)
	let houseB = 0 // running total upto one house before i (cannot add value of house at i to this)
	for(let i = 0; i < nums.length; i++){
			const temp = Math.max(houseA + nums[i], houseB)
			houseA = houseB
			houseB = temp
	}
	return houseB
};