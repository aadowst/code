// from:  https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Runtime: 107 ms(faster than 58.24%)
// Memory Usage: 45.6 MB (less than 23.85%)
var maxDepth = function(root) {
	if(!root) return 0
	return count = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};