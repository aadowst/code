// from:  https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
	/**
	 * @param {number} k
	 * @param {number[]} nums
	 */
	constructor(k, nums) {
		this.k = k;
		this.minHeap = new MinPriorityQueue();
		nums.forEach((num) => this.add(num))
	};

	/** 
	 * @param {number} val
	 * @return {number}
	 */
	add(val) {
		if (this.minHeap.size() < this.k) {
			this.minHeap.enqueue(val)
			return this.minHeap.front().element
		} else {
			if (this.minHeap.front().element < val) {
				this.minHeap.dequeue()
				this.minHeap.enqueue(val)
			}
			return this.minHeap.front().element;
		}
	};
}
