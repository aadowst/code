// from:  https://leetcode.com/problems/reorder-list/

// Comment: using a stack to reorder the nodes. It is simpler and much better with memory, but only a tiny bit faster (probably due to all the shifting)
// Runtime: 215 ms, faster than 11.35% of JavaScript on. line submissions for Reorder List.
// Memory Usage: 49.9 MB, less than 74.86% of JavaScript online submissions for Reorder List.
var reorderList = function (head) {
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
	if(stack.length ===1){
		let lastNode = stack.pop();
		node.next = lastNode
		lastNode.next = null
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
