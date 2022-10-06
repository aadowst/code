// from https://leetcode.com/problems/reverse-linked-list/

// Runtime: 123 ms(faster than 12.87%)
// Memory Usage: 44.5 MB (less than 32.04%)

var reverseList = function(head) {
	if(head == null) return null
	let returnList= null
	let runner = head
	while(runner){
		// create a temp node and make it the back of the return list
			let tempNode = new ListNode(runner.val)
			tempNode.next = returnList
			// redifine the return list now that temp node has been added
			returnList = tempNode
			runner = runner.next
	}
	return returnList
};


// Runtime:  100 ms (55%)  and 129 ms (7%) (ran it twice with identical code)
// Memory Usage: 44.4 MB
var reverseListTwoRunners = function(head){
	if(head == null) return null
	let returnList= null
	let runner = head
	let frontRunner;
	while(runner){
		// set the frontRunner to the next node in the 'forward direction'
		frontRunner = runner.next
		// redefine runner.next to 'look back' at the return list
		runner.next = returnList
		// redefine the returnList to include runner
		returnList = runner
		// advance runner
		runner = frontRunner
	}
	return returnList
}