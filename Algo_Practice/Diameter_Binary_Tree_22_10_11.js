// from:  https://leetcode.com/problems/diameter-of-binary-tree/

// Runtime: 116 ms(faster than 48.65%)
// Memory Usage: 46 MB (less than 25.69%)
var diameterOfBinaryTree = function(root) {
	let maxDiameter = 0
	
	var depthFirstSearch = function(root){
		// if there is no node, return -1 (to cancel out the +1 in the return)
			if(!root) return -1
			// left and right are the heights down each branch
			const left = depthFirstSearch(root.left)
			const right = depthFirstSearch(root.right)
			// currentDiameter is the combined height of the left and right sub branches plus 2 more (for the edges that connect the sub-branches to the parent node)
			const currentDiameter = left + right + 2
			maxDiameter = Math.max(maxDiameter, currentDiameter)
			return 1 + Math.max(left, right)
	}
	depthFirstSearch(root)
	return maxDiameter
	}