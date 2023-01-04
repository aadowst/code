// https://leetcode.com/problems/subsets/

// Runtime:  111 ms (beats 23.33%)
// Memory:  44.1 MB (beats 41.9%)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsBacktracking = function (nums) {
  const subsets = [];
  let subset = [];

  function depthFirstSearch(index) {
    if (index >= nums.length) {
      // make a copy of the subset
      subsets.push([...subset]);
      return;
    }

    //include nums[index]
    subset.push(nums[index]);
    depthFirstSearch(index + 1);

    // backtrack (exclude nums[index] from subset)
    subset.pop();
    depthFirstSearch(index + 1);
  }
  depthFirstSearch(0);
  return subsets;
};

// Runtime:  131 ms (beats 5.66%)
// Memory:  44 MB (beats 46.24%)

var subsetsRecursive = function (nums) {
  const subsets = [];
  let subset = [];

  function depthFirstSearch(index, subset) {
    if (index >= nums.length) {
      // make a copy of the subset
      subsets.push([...subset]);
      return;
    }

    //include nums[index]
    depthFirstSearch(index + 1, [...subset, nums[index]]);

    // exclude nums[index]
    depthFirstSearch(index + 1, [...subset]);
  }
  depthFirstSearch(0, subset);
  return subsets;
};
