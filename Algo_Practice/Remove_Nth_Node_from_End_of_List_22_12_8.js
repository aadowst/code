// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Runtime:  92 ms (beats 69.65%)
// Memory:  43.8 MB (beats 10.76%)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let left = head;
  let right = head;

  //shift right over n spots
  for (let i = 0; i < n; i++) {
    right = right.next;
  }
	
  //if right is null, then n is equal to the length of the list and the head node should be removed
  if (!right) return head.next;

  //when right is at the end of the list, left will be 1 spot ahead of node to be removed
  while (right.next) {
    left = left.next;
    right = right.next;
  }

  //check to see if node is the one to be removed is in the middle
  if (left.next.next !== null) left.next = left.next.next;
  else left.next = null;
  return head;
};
