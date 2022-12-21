// https://leetcode.com/problems/kth-smallest-element-in-a-bst/


// Runtime:  63 ms (beats 99.61%)
// Memory Usage:  48.3 MB (beats 58.12%)
// Strategy:  Perform DFS to the left side of the array and increment count as each subsequent smallest value is seen. When count equals k, set the value and short-circuit the search.
// Comment:  Thought memory usage would be better than solution at bottom (since eliminated the array), but happy with the runtime!


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count= 0;
	let val;
  smallestDFS(root);

  function smallestDFS(node) {
    if (!node) return;
    if(count >= k) return
		smallestDFS(node.left);
    count++
		if(count == k) val = node.val
		else 	smallestDFS(node.right);
			
		return
  }

	return val
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Runtime:  83 ms (beats 84.4%)
// Memory Usage:  48.1 MB (beats 75.83%)
// Strategy:  Perform DFS down left side of tree. Add subsequently smallest values to array until length of array equals k. Return last digit of array
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const seen = [];
  smallestDFSArray(root);

  function smallestDFSArray(node) {
    if (!node) return;
    if (seen.length < k) {
      smallestDFSArray(node.left);
    }

    seen.push(node.val);

    if (seen.length < k) {
      smallestDFSArray(node.right);
    }
		return
  }

	return seen[k-1]
};
