// from https://leetcode.com/problems/validate-binary-search-tree/

// Runtime:  105 ms (beats 65.63%)
// Memory Usage:  45.9 MB (beats 61.16%)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;

  let minValue = Number.NEGATIVE_INFINITY;
  let maxValue = Number.POSITIVE_INFINITY;

  return (BSTisValid = isValidBSTRecursive(root, minValue, maxValue));

  function isValidBSTRecursive(node, minValue, maxValue) {
    if (!node) return true;

    const nodeIsValid = minValue < node.val && node.val < maxValue;
    const leftIsValid = isValidBSTRecursive(
      node.left,
      minValue,
      Math.min(maxValue, node.val)
    );
    const rightIsValid = isValidBSTRecursive(
      node.right,
      Math.min(maxValue, node.val),
      maxValue
    );

    return nodeIsValid && leftIsValid && rightIsValid;
  }
};
