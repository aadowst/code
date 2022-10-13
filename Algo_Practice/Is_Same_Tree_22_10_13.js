// from:  https://leetcode.com/problems/same-tree/

// Runtime:  87 ms (faster that 64.99%)
// Memory Usage:  43.9 MB (less than 35.57%)

var isSameTree = function(p, q) {

	if(!p && !q) return true
	if(!p || !q) return false
	if(p.val !== q.val) return false
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
	
};