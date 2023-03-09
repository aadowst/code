// https://leetcode.com/problems/maximum-subarray/

// Runtime:  85 ms (beats 66.66%)
// Memory:  50.2 MB (beats 72.76%)
// Strategy:  Uses a sliding window approach; increment right pointer and calculate runningSum in window. Compare runningSum with max & update max if needed. If runningSum is negative, start new window with left pointer where right pointer was.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let left = 0;
  while (left < nums.length) {
    let runningSum = nums[left];
    max = Math.max(max, runningSum);
    let right = left + 1;
    while (runningSum > 0 && right < nums.length) {
      runningSum += nums[right];
      max = Math.max(max, runningSum);
      right++;
    }
    left = right;
  }
  return max;
};

// Comment:  brute force works but times out on Leetcode

var maxSubArrayBruteForce = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    findSubArray(i);
  }

  function findSubArray(start) {
    let localMax = nums[start];
    max = Math.max(localMax, max);
    if (nums[start] <= 0) return;
    let end = start + 1;
    while (end < nums.length) {
      localMax += nums[end];
      max = Math.max(localMax, max);
      end++;
    }
  }
  return max;
};
