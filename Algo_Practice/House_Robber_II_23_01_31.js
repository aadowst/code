// https://leetcode.com/problems/house-robber-ii/

// Runtime:  72 ms (beats 43.56%)
// Memory:  41.3 MB (beats 99.13%)
// Strategy:  run rob function twice (excluding the last value one time and the first value the other, since the result can never include both)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 4) return Math.max(...nums);
  const end = nums.length;
  return Math.max(robHelper(0, end - 1), robHelper(1, end));
  function robHelper(start, end) {
    let houseA = 0;
    let houseB = 0;
    for (let i = start; i < end; i++) {
      const temp = Math.max(houseA + nums[i], houseB);
      houseA = houseB;
      houseB = temp;
    }
    return houseB;
  }
};

const nums1 = [3, 4, 7, 8, 6, 9, 10, 1]; // expected 26
const nums1b = [3, 4, 7, 8, 6, 90, 10, 1]; // expected 103
const nums1c = [3, 2, 7, 8, 6, 90, 10, 1]; // expected 101
const nums1d = [3, 2, 7, 8, 6, 9, 10, 1]; // expected 26
const nums2 = [3, 1, 5, 7, 2, 4, 8]; // expected 16

console.log(robInCircle(nums1));
