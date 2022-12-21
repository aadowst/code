// from https://leetcode.com/problems/validate-binary-search-tree/

// Runtime:  80 ms (beats 81.76%)
// Memory Usage:  45.8 MB (beats 91.27%)

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
var isValidBST = function (
  node,
  minValue = Number.NEGATIVE_INFINITY,
  maxValue = Number.POSITIVE_INFINITY
) {
  if (!node) return true;

  const nodeIsValid = minValue < node.val && node.val < maxValue;
  const leftIsValid = isValidBST(
    node.left,
    minValue,
    Math.min(maxValue, node.val)
  );
  const rightIsValid = isValidBST(
    node.right,
    Math.min(maxValue, node.val),
    maxValue
  );

  return nodeIsValid && leftIsValid && rightIsValid;
};
