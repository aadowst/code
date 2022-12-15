// leetcode.com/problems/binary-tree-level-order-traversal

// Runtime: 63 ms (beats 97.22%)
// Memory Usage:  44.3 MB (beats 51.93%)

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if(!root) return []
	let returnArray = []
	let queue = [root]

	while(queue.length > 0){
			let tempQueue = []
			let rowOutput = []
			while(queue.length > 0){
					let node = queue.shift()
					if(node){
							rowOutput.push(node.val)
							tempQueue.push(node.left)
							tempQueue.push(node.right)
					}
			}
			if(rowOutput.length  > 0 ) returnArray.push(rowOutput)
			queue = tempQueue
	}

	
	return returnArray
};