// from:  https://leetcode.com/problems/linked-list-cycle/

// Runtime: 82 ms(faster than 90.00%)
// Memory Usage: 45.1 MB (less than 50.35%)
var hasCycle = function(head) {
	if(head == null) return false
	let runner = head
	let fastRunner = head.next
	let count = 0
	// if there isn't a fastRunner.next, then fastRunner.next.next will throw an error, so check it exists in while
	while(fastRunner.next && count < 10000){
			if(runner == fastRunner) return true
			runner = runner.next
			fastRunner = fastRunner.next.next
			count++
	}
	return false
};