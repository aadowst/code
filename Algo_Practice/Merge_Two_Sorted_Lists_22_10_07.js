// from: https://leetcode.com/problems/merge-two-sorted-lists/


// Runtime: 113 ms(faster than 45.09%)
// Memory Usage: 44.7 MB (less than 11.35%)
// Comment:  set up dummy head, because head of merged list should be returned. Didn't mutate the nodes in this solution (see faster solution below that does mutate them)
var mergeTwoLists = function (list1, list2) {

	if (list1 == null && list2 == null) return null
	if (list1 == null) return list2
	if (list2 == null) return list1
	let dummyHead = new ListNode()
	let mergedList = dummyHead
	let runner1 = list1
	let runner2 = list2

	while (runner1 && runner2) {

		if (runner1.val < runner2.val) {
			const temp = new ListNode(runner1.val)
			mergedList.next = temp
			mergedList = temp
			runner1 = runner1.next
		} else {
			const temp = new ListNode(runner2.val)
			mergedList.next = temp
			mergedList = temp
			runner2 = runner2.next
		}
	}
	while (runner1 !== null) {
		const temp = new ListNode(runner1.val)
		mergedList.next = temp
		mergedList = temp
		runner1 = runner1.next
	}
	while (runner2 !== null) {
		const temp = new ListNode(runner2.val)
		mergedList.next = temp
		mergedList = temp
		runner2 = runner2.next
	}

	return dummyHead.next
};

// Runtime: 182 ms(faster than 83.46%)
// Memory Usage: 43.9 MB (less than 85.77%)
var mergeTwoListsMutated = function (list1, list2) {

	if (list1 == null && list2 == null) return null
	if (list1 == null) return list2
	if (list2 == null) return list1
	let dummyHead = new ListNode()
	let mergedList = dummyHead
	let runner1 = list1
	let runner2 = list2

	while (runner1 && runner2) {

		if (runner1.val < runner2.val) {

			mergedList.next = runner1
			mergedList = runner1
			runner1 = runner1.next
		} else {
			mergedList.next = runner2
			mergedList = runner2
			runner2 = runner2.next
		}
	}
	if (runner1 !== null) {
		mergedList.next = runner1
		mergedList = runner1
	}
	if (runner2 !== null) {
		mergedList.next = runner2
		mergedList = runner2
	}

	return dummyHead.next
};
