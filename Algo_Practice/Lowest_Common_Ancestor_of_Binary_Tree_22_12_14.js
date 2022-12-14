// leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree

// Runtime:  82 ms (beats 95.68%)
// Memory Usage:  51.7 MB (beats 93.36%)
// Comment:  again the leetcode software was glichty (p and q are supposed to be ints, but had to treat them like nodes and access their .val properties)
var lowestCommonAncestorBinarySearchTree = function(root, p, q){
	if(root.val < p.val && root.val < q.val) return lowestCommonAncestorBinarySearchTree(root.right, p, q)
	if(root.val > p.val && root.val > q.val) return lowestCommonAncestorBinarySearchTree(root.left, p, q)
	return root
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Comment:  another glitch in the Leetcode software (p and q are sometimes arrays and sometimes integers), so couldn't get runtime or memory usage data. Note:  this code works for any binary tree (not just a binary search tree)

var lowestCommonAncestorAllBinaryTrees = function (root, p, q) {
  let LCA;
  lowestCommonAncestorRecursive(root, p, q);

  function lowestCommonAncestorRecursive(node, p, q) {
    if (!node) return;
    let left = lowestCommonAncestor(node.left, p, q);
    let right = lowestCommonAncestor(node.right, p, q);

		const pSeen = left === p || right === p || node.val === p
		const qSeen = left === q || right === q || node.val === q

		if(pSeen && qSeen){
			LCA = node.val
			return
		}
    if (pSeen) return p.val
		if (qSeen) return q.val
		return
  }

  return LCA;
};
