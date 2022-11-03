// from: leetcode.com/problems/missing-number

// Other ideas calculated the expected sum (if all numbers were present) and then subtracted each value from nums to see what is missing (formula is [nums.length * 0.5(nums.length + 1)])

// A more complicated way to do essentially the same is to use the reduce function (ref:  https://leetcode.com/problems/missing-number/discuss/388832/Javascript-easy-one/1619986)

// Or an array the length of all possible values (nums.length + 1) can be filled with values that won't show up in nums (e.g. -1). As you loop through nums, change the value at each index that is present (e.g. nums[i] = i). Then return the index of the value that hasn't changed (return nums.indexOf(-1))

// Runtime:  120 ms (faster than 45.59%)
// Memory Usage:  48.2 MB (less than 8.27%)
var missingNumberUsingSetAgain = function(nums) {
	const numsSet = new Set(nums)
	for(let i = 0; i <= nums.length; i++){
			if(!numsSet.has(i)) return i
	}
};

// Runtime:  120 ms (faster than 45.59%)
// Memory Usage:  50.3 MB (less than 5.22%)
var missingNumberUsingSet = function(nums) {
	const allNums = new Set()
	for(let i = 0; i <= nums.length; i++){
			allNums.add(i)
	}
	for(num of nums){
			allNums.delete(num)
	}
	for(value of allNums) return value
};

// Runtime:  148 ms (faster than 26.47%)
// Memory Usage:  44.4 MB (less than 61.18%)
var missingNumberUsingSort = function(nums) {
	nums.sort((a,b) => a-b)
	for(let i = 0; i < nums.length; i++){
			if(nums[i] !== i) return i
	}
	// if there wasn't a number missing in the middle of the sequence, then the last number is missing (ex. [0,1] is missing 2)
	return nums.length
};

missingNumber([3,0,1])