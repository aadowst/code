// from https://leetcode.com/problems/last-stone-weight

// Runtime:  118ms (faster than 26.28%)
// Memory Usage:  43.1 MB (less than 65.81%)

var lastStoneWeight = function(stones) {
	const maxHeap = new MaxPriorityQueue();
	stones.forEach((stone) => maxHeap.enqueue(stone));
	while(maxHeap.size() > 1){
			let stone1 = maxHeap.dequeue();
			let stone2 = maxHeap.dequeue();
			let difference = stone1.element - stone2.element
			if(difference > 0) maxHeap.enqueue(difference);
	}
	return maxHeap.size() === 1 ? maxHeap.front().element : 0
	
};