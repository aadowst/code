// from:  https://leetcode.com/problems/invert-binary-tree/submissions/

// Runtime: 81 ms(faster than 72.16%)
// Memory Usage: 42.6 MB (less than 17.65%)
var invertTree = function(root) {
	if(!root) return root
	if(root.left === null && root.right === null) return root
	const temp = root.left
	root.left = root.right
	root.right = temp
	invertTree(root.left)
	invertTree(root.right)
	
	return root
};