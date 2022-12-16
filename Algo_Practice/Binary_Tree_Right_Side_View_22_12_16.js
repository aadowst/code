// leetcode.com/problems/binary-tree-right-side-view

// Runtime:  72 ms (beats 86.37%)
// Memory Usage:  43.7 MB (beats 68.29%)
// Comment:  the node seen from the right might be in the middle or on the left (if there isn't another node 'blocking its view')
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
 * @return {number[]}
 */
var rightSideView = function(root) {
	const rightValues = []

	recursiveRight(root, 1)
	function recursiveRight(node, level){
			if(!node) return
			if(level > rightValues.length) rightValues.push(node.val)
			recursiveRight(node.right, level + 1)
			recursiveRight(node.left, level + 1)
	}

	return rightValues
};