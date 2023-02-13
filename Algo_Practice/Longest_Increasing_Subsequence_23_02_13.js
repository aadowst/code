// https://leetcode.com/problems/longest-increasing-subsequence/

// Runtime:  159 ms (beats 77.45%)
// Memory:  43.4 MB (beats 79.73%)
function lengthOfLISDP(nums){
	if(!nums.length) return 0
	let dpArray = Array(nums.length).fill(1)
	let maxLength = 1
	for(let i = nums.length - 2; i >=0; i--){
		const lengthFromI = 1
		for(let j = i + 1; j < nums.length;j++){
			if(nums[j] > nums[i]) lengthFromI = Math.max(lengthFromI, dpArray[i] + dpArray[j])
		}
		dpArray[i] = lengthFromI
		maxLength = Math.max(maxLength, lengthFromI)
	}
	return maxLength
}

// Comment:  works on testcases, but times out on leetcode.
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	let longest = 0
	const startValues = new Set()
	findSubsequence(0)
	function findSubsequence(start){
			if(start == nums.length) return
			if(startValues.has(start)) return
			startValues.add(start)
			let subsequence = [nums[start]]
			let last = nums[start]
			let secondToLast = nums[start]
			for(let i = start + 1; i < nums.length; i++){
					if(nums[i] <  nums[start]) findSubsequence(i)
					if(nums[i] > last){
							subsequence.push(nums[i])
							secondToLast = last
							last = nums[i]
					}
					if(nums[i] < last && nums[i] > secondToLast){
							subsequence.pop()
							subsequence.push(nums[i])
							last = nums[i]
					}
			}
			longest = Math.max(longest, subsequence.length)
	}
	return longest

};