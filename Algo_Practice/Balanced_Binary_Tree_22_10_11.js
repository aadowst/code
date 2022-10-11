// from: https://leetcode.com/problems/balanced-binary-tree

// Runtime:  67 ms (faster that 99.25%)
// Memory Usage:  47.1 MB (less than 69.12%)
var isBalanced = function(root) {
	var isBalanced = true
	
	var compareDepths = function(root){
	if(!root) return 0
	const left = compareDepths(root.left)
	const right = compareDepths(root.right)
	if(Math.abs(left-right) > 1) isBalanced = false
	return Math.max(left, right) + 1
	}
	
	compareDepths(root)
	return isBalanced
	
};