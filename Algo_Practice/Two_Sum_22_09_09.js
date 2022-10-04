// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

// Note:  exacly one solution expected, so need to continue after finding it (nor a need to return an empty set at the end)
function twoSumSpaceOptimized(nums, targetSum) {
    for(let i =0; i< nums.length; i++){
        for(let j = i+1 ; j < nums.length; j++){
            if(nums[i] + nums[j] === targetSum) return [i, j]
        }
    }
}


// Saves numbers in the array as the keys in the object and their indexes as the values
function twoSumTimeOptimized(nums, targetSum) {
    const indexesAtValues = {};
    for(let i = 0; i < nums.length; i++){
        const complement = targetSum - nums[i]
        if(indexesAtValues.hasOwnProperty(complement)){
            const complementIndex = indexesAtValues[complement]
            return [i, complementIndex]
        }
        indexesAtValues[nums[i]] = i
    }
}

console.log(twoSumSpaceOptimized(nums3, targetSum3));