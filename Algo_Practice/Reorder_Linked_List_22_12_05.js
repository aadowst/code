// from:  https://leetcode.com/problems/reorder-list/

// Comment:  much better performance!
// Runtime:  165 ms (beats 42.64%)
// Memory:  49.7 MB (beats 85.83%)
var reorderList = function (head) {
  let slow = head;
  let fast = head.next;
  //find middle of list (slow is at middle when fast reaches end)
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let next;
  let node = slow.next;
  //   slow will become the next of the reordered list, so its .next should be null
  slow.next = null;

  // reverse second half of list
  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  // head is the start of the first half of the list and prev is the start of the reveresed back half of the list
  let nodeLeft = head;
  let nodeRight = prev;
  while (nodeRight) {
    let tempLeft = nodeLeft.next;
    nodeLeft.next = nodeRight;
    nodeLeft = tempLeft;

    let tempRight = nodeRight.next;
    nodeRight.next = nodeLeft;
    nodeRight = tempRight;
  }
};

// Runtime:  198 ms (beats 15.37%)
// Memory:  55 MB (beats 5.31%)
var reorderListStackRefactored = function (head) {
  let node = head.next;
  let stack = [];
  while (node) {
    stack.push(node);
    node = node.next;
  }
  node = head;
  const mid = Math.floor((stack.length - 1) / 2);
  for (let i = 1; i <= mid; i++) {
    const front = i;
    const back = stack.length - i;
    backNode = stack[back];
    node.next = backNode;
    backNode.next = null;
    node = backNode;
    if (front !== back) {
      frontNode = stack[front];
      node.next = frontNode;
      frontNode.next = null;
      node = frontNode;
    }
  }
};

// Comment: using a stack to reorder the nodes. It is simpler and much better with memory, but only a tiny bit faster (probably due to all the shifting)
// Runtime: 215 ms, faster than 11.35% of JavaScript on. line submissions for Reorder List.
// Memory Usage: 49.9 MB, less than 74.86% of JavaScript online submissions for Reorder List.
var reorderListStackOriginal = function (head) {
  let node = head.next;
  let stack = [];
  while (node) {
    stack.push(node);
    node = node.next;
  }
  node = head;
  while (stack.length > 1) {
    backNode = stack.pop();
    frontNode = stack.shift();
    node.next = backNode;
    backNode.next = frontNode;
    frontNode.next = null;
    node = frontNode;
  }
  if (stack.length === 1) {
    let lastNode = stack.pop();
    node.next = lastNode;
    lastNode.next = null;
  }
};

// Comment:  not surprisingly slow
// Runtime: 967 ms, faster than 5.07% of JavaScript online submissions for Reorder List.
// Memory Usage: 50.3 MB, less than 36.28% of JavaScript online submissions for Reorder List.
var reorderListIterative = function (head) {
  let runner = head;
  if (runner.next === null || runner.next.next === null) return;
  let count = 1;
  while (count > 0) {
    count = 1;
    let advanceRunner = runner.next;
    while (advanceRunner.next.next !== null) {
      advanceRunner = advanceRunner.next;
      count++;
    }
    let movingNode = advanceRunner.next;
    movingNode.next = runner.next;
    runner.next = movingNode;
    runner = movingNode.next;
    count -= 2;
    advanceRunner.next = null;
  }
  console.log(count);
};
