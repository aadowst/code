// from:https://leetcode.com/problems/search-in-rotated-sorted-array/

// Comment:  much cleaner, but not faster (surprisingly)
// Runtime: 102 ms, faster than 38.29% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 41.8 MB, less than 90.14% of JavaScript online submissions for Search in Rotated Sorted Array.
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
		if(nums[mid] === target) return mid
    // check to see if the left half is sorted
    if (nums[left] <= nums[mid]) {
			// check to see if target is in range
      if (nums[left] <= target && target <= nums[mid]) return binarySearch(left, mid);
      else left = mid + 1;
    }
		// check to see if right half is sorted
    if (nums[mid] <= nums[right]) {
			// check to see if target is in range
      if (nums[mid] <= target && target <= nums[right]) return binarySearch(mid, right);
      else right = mid - 1;
    }
  }
  return -1;

  function binarySearch(startIdx, endIdx) {
    let leftBS = startIdx;
    let rightBS = endIdx;
    let midBS;
    while (leftBS <= rightBS) {
      midBS = Math.floor((leftBS + rightBS) / 2);
      if (nums[midBS] === target) return midBS;
      else if (nums[midBS] < target) leftBS = midBS + 1;
      else rightBS = midBS - 1;
    }
    return -1;
  }
};

// Comment:  uses a binary search helper function, if the target is in the range of a sorted section
// Runtime: 98 ms, faster than 47.75% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 42.4 MB, less than 32.04% of JavaScript online submissions for Search in Rotated Sorted Array.
var searchOriginal = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // check to see if the left half is sorted and the target could be in the left half
    if (nums[left] <= target && target <= nums[mid])
      return binarySearch(left, mid);
    // check to see if the right half is sorted and the target could in the right half
    else if (nums[mid] <= target && target <= nums[right])
      return binarySearch(mid, right);
    // check to see if left half is unsorted
    else if (nums[left] > nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;

  function binarySearch(startIdx, endIdx) {
    let leftBS = startIdx;
    let rightBS = endIdx;
    let midBS;
    while (leftBS <= rightBS) {
      midBS = Math.floor((leftBS + rightBS) / 2);
      if (nums[midBS] === target) return midBS;
      else if (nums[midBS] < target) leftBS = midBS + 1;
      else rightBS = midBS - 1;
    }
    return -1;
  }
};

console.log(search([4,5,6,7,0,1,2], 1));
