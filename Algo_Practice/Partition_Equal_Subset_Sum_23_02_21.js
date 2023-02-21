// https://leetcode.com/problems/partition-equal-subset-sum/

// Runtime:  442 ms (beats 39.36%)
// Memory Usage:  60 MB (beats 47.85%)
// Strategy:  uses a set object to keep track of all possible totals that could be seen in a brute-force approach. 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	const target = nums.reduce((previous, current) => previous + current)/2
	const possibleTotals = new Set()
	possibleTotals.add(0)

	for(const num of nums){
			const newValues = []
			possibleTotals.forEach(value => newValues.push(value + num) ) // adding the new values directly to the set creates an infinite loop
			while(newValues.length > 0){
					const newValue = newValues.pop()
					possibleTotals.add(newValue)
			}
			if(possibleTotals.has(target)) return true
	}
	return false
};

// Comment:  times out on leetcode
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartitionBruteForce = function(nums) {
	nums.sort((a,b) => b - a)
	const target = nums.reduce((previous, current) => previous + current)/2  // each subset must be half the total
	let targetFound = false
	bruteForce(0,0)
	function bruteForce(index, runningTotal){
			if(targetFound) return
			if(runningTotal > target) return
			if(runningTotal === target){
					targetFound = true
					return
			}
			if(index === nums.length) return
			bruteForce(index + 1, runningTotal + nums[index])
			bruteForce(index + 1, runningTotal)
	}


	return targetFound
};