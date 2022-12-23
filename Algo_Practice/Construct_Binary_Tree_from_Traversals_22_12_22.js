// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


// Runtime:  169 ms (beats 48.81%)
// Memory Usage:  119.7 MB (beats 36.51%)

var buildTree = function(preorder, inorder) {

	if(!preorder.length || !inorder.length) return null
	const node = new TreeNode(preorder[0])
	let parentIndex = inorder.indexOf(node.val)
	node.left = buildTree(preorder.slice(1, parentIndex+1), inorder.slice(0, parentIndex))
	node.right = buildTree(preorder.slice(parentIndex +1), inorder.slice(parentIndex+1))
	return node
	
};


// Comment:  overthought it, but it works!
// Runtime:  833 ms (beats 5.16%)
// Memory Usage:  88 MB (beats 53.73%)
var buildTreeOriginal = function(preorder, inorder) {
 
	if(preorder.length == 0 || inorder.length == 0) return null
	const node = new TreeNode(preorder.shift())
	const seenOnLeft = new Set()
	let idx = 0;
	console.log(node.val)
	while(inorder[idx] !== node.val ){
			seenOnLeft.add(inorder[idx])
			idx++
	}
	
	const leftInorder = inorder.slice(0, idx)
	const rightInorder = inorder.slice(idx+1, inorder.length)

	const leftPreorder = []
	const rightPreorder = []
	while(preorder.length > 0){
			const val = preorder.shift()
			if(seenOnLeft.has(val)) leftPreorder.push(val)
			else rightPreorder.push(val)
	}
	
	node.left = buildTree(leftPreorder, leftInorder )
	node.right = buildTree(rightPreorder, rightInorder )

	return node
};