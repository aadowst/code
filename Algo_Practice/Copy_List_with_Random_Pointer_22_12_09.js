// https://leetcode.com/problems/copy-list-with-random-pointer/\

// Runtime:  66 ms (beats 92.9%)
// Memory Usage:  42.9 MB (beats 100%)
var copyRandomList = function (head) {
  if (!head) return;
  let dummyHead = new Node(head.val, null, null);
  let node = dummyHead;
  let originalNode = head;
  let map = new Map(); //map used to keep track of which nodes in each list correspond to each other (since values might not be unique)
  while (originalNode) {
    let newNode = new Node(originalNode.val, null, null);
    map.set(originalNode, newNode);
    node.next = newNode;
    node = newNode;
    originalNode = originalNode.next;
  }
  node = dummyHead.next;
  originalNode = head;
  while (originalNode) {
    if (originalNode.random) {
      let originalRandom = map.get(originalNode.random);
      node.random = originalRandom;
    }
    node = node.next;
    originalNode = originalNode.next;
  }
  return dummyHead.next;
};

// Comment: involves mutating the original nodes (and then changing back at the end). There were glitches in the Leetcode tester (the index property was accessible on some nodes, but not others), so couldn't get performance data

var copyRandomListLabelingNodes = function (head) {
  let dummyHead = new Node(head.val, null, null);
  let newNodes = [];
  let node = dummyHead;
  let originalNode = head;
  let count = 0;
  while (originalNode) {
    originalNode.index = count;
    let newNode = new Node(originalNode.val, null, null);
    newNodes.push(newNode);
    node.next = newNode;
    node = newNode;
    originalNode = originalNode.next;
    count++;
  }

  node = dummyHead.next;
  originalNode = head;
  while (originalNode) {
    if (originalNode.random) {
      let originalRandom = originalNode.random.index;
      node.random = newNodes[originalRandom];
    }
    delete originalNode.index;
    node = node.next;
    originalNode = originalNode.next;
  }

  return dummyHead.next;
};

// Comment:  this worked when each node had a unique value, but not when there were repeats
var copyRandomListDictionary = function (head) {
  let newHead = new Node(head.val, null, null);
  let newNodes = {};
  newNodes[newHead.val] = newHead;
  let node = newHead;
  let originalNode = head.next;
  while (originalNode) {
    let newNode = new Node(originalNode.val, null, null);
    newNodes[newNode.val] = newNode;
    node.next = newNode;
    node = newNode;
    originalNode = originalNode.next;
  }

  node = newHead;
  originalNode = head;
  while (originalNode) {
    let originalRandom = originalNode.random?.val;
    if (originalRandom) node.random = newNodes[originalRandom];
    node = node.next;
    originalNode = originalNode.next;
  }

  return newHead;
};
