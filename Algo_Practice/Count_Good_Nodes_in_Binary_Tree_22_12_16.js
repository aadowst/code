// leetcode.com/problems/count-good-nodes-in-binary-tree

// Runtime:  155 ms (beats 90.96%)
// Memory Usage:  65.1 MB (beats 93.13%)

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
 * @return {number}
 */
var goodNodes = function(root) {
	let count = 0

	goodNodesRecursive(root)
	function goodNodesRecursive(node, highestInPath = Number.NEGATIVE_INFINITY){
			if(!node) return
			if(node.val >= highestInPath) count++
			goodNodesRecursive(node.right, Math.max(node.val, highestInPath))
			goodNodesRecursive(node.left, Math.max(node.val, highestInPath))

	}

	return count
};