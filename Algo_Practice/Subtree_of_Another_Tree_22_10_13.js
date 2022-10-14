// from:  https://leetcode.com/problems/subtree-of-another-tree/

// Runtime: 159 ms(faster than 22.94%)
// Memory Usage: 49.5 MB (less than 32.51%)
var isSubtree = function(root, subRoot) {
	if(!root) return false
	if(isSameTree(root, subRoot)) return true
	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

var isSameTree = function(p, q) {

if(!p && !q) return true
if(!p || !q) return false
if(p.val !== q.val) return false
return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

};