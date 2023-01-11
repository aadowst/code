// https://leetcode.com/problems/clone-graph/

// Runtime:  64 ms (beats 90.15%)
// Memory:  43.5 MB (beats 86.64%)
// Comment:  used the original node object as the key in the Map (rather than it's value). Faster lookup and this implementation allows for duplicate values w/ the nodes

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const oldToNew = new Map();
  const clone = function (node) {
    if (!node) return node;
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }
    let clonedNode = new Node(node.val);
    oldToNew.set(node, clonedNode);
    for (let neighbor of node.neighbors) {
      clonedNode.neighbors.push(clone(neighbor));
    }
    return clonedNode;
  };
  return clone(node);
};

// Runtime:  71 ms (beats 75.98%)
// Memory:  43.5 MB (beats 86.64%)
// Comment:  similar to implementation below, but with Map object. Slight performance improvement

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const oldToNew = new Map();
  const clone = function (node) {
    if (!node) return node;
    if (oldToNew.has(node.val)) {
      return oldToNew.get(node.val);
    }
    let clonedNode = new Node(node.val);
    oldToNew.set(node.val, clonedNode);
    for (let neighbor of node.neighbors) {
      clonedNode.neighbors.push(clone(neighbor));
    }
    return clonedNode;
  };
  return clone(node);
};

// Runtime:  72 ms (beats 73.5%)
// Memory:  43.7 MB (beats 78.66%)
// Comment:  since all nodes have unique values, the node.val is used as the key, as this is slightly optimized. However, storing the node itself as a key should also work (got error with leetcode software, which I believe is a mistake based on others' submissions)

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraphPlainObject = function (node) {
  const oldToNew = {};
  const clone = function (node) {
    if (!node) return node;
    if (oldToNew[node.val] != null) {
      return oldToNew[node.val];
    }
    let clonedNode = new Node(node.val);
    oldToNew[node.val] = clonedNode;
    for (let neighbor of node.neighbors) {
      clonedNode.neighbors.push(clone(neighbor));
    }
    return clonedNode;
  };
  return clone(node);
};
