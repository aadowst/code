// from:  https://leetcode.com/problems/longest-consecutive-sequence/

// Runtime:  148 ms (faster than 87.93%)
// Memory Usage:  57.4 MB (less than 71.43%)

var longestConsecutiveSet = function(nums) {
	let set = new Set(nums);
	let maxCount = 0;
	// must use enhanced for loop for a set, since the keys don't have indexes.
	for(let n of set) {
		// check to see if the number is the start of a potential sequence
			if(!set.has(n-1)) {
					let count = 0;
					// while loop through sequence
					while(set.has(n)) {
							count++;
							n++
					}
					maxCount = Math.max(count, maxCount);
			}
	}
	return maxCount;
};

// Comment:  timed-out on leetcode with input of nums = [0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999]. Was able to calculate answer here (took ~31 seconds)
var longestConsecutive = function (nums) {
  let sortedArray = [];
  let sortedNegArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      // there couldn't be a value at sortedNegArray at index zero, so all values shifted by one. (i.e. -1, which becomes 1, is stored in the 0th index)
      sortedNegArray[Math.abs(nums[i]) - 1] = true;
    } else {
      sortedArray[nums[i]] = true;
    }
  }
  let maxCount = 0;
  let count = 0;
  for (let j = sortedNegArray.length - 1; j >= 0; j--) {
    if (sortedNegArray[j] !== true) {
      maxCount = Math.max(maxCount, count);
      count = 0;
    } else count++;
  }
  for (let k = 0; k < sortedArray.length; k++) {
    if (sortedArray[k] !== true) {
      maxCount = Math.max(maxCount, count);
      count = 0;
    } else count++;
  }
  maxCount = Math.max(maxCount, count);
  return maxCount;
};

console.log(
  longestConsecutiveSet([0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999])
);
