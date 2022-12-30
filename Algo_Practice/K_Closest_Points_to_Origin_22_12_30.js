// https://leetcode.com/problems/k-closest-points-to-origin/

// Runtime:  246 ms (beats 77.1%)
// Memory Usage:  56.1 MB (beats 79.74%)
// Comment:  used distanceSquared rather than distance in priority queue, to eliminate the cost of peforming the square root operation

var kClosest = function(points, k) {

	const maxHeap = new MaxPriorityQueue();
	const returnArray = []
	let index = 0
	for(const [x,y] of points){
			const distanceSquared = x**2 + y**2
			if(maxHeap.size() < k){
			maxHeap.enqueue(index, distanceSquared)
			index++
			continue;
			} 
			if(distanceSquared < maxHeap.front().priority){
					maxHeap.dequeue()
					maxHeap.enqueue(index, distanceSquared)
			}
			index++
	}
	let count = 0
	while(count < k){
			const currentClosest = maxHeap.dequeue().element
			returnArray.push(points[currentClosest])
			count++
	}

	return returnArray
};


// Runtime:  278 ms (beats 71.72%)
// Memory Usage:  61.2 MB (beats 37.5%)
// Comment:  similar to the next solution, but only the index of a set of points is stored in the priority heap (rather than the subArray itself)

var kClosestUsingIndexInMaxHeap = function(points, k) {

	const maxHeap = new MaxPriorityQueue();
	const returnArray = []
	let index = 0
	for(const [x,y] of points){
			const distance = Math.sqrt(x**2 + y**2)
			if(maxHeap.size() < k){
			maxHeap.enqueue(index, distance)
			index++
			continue;
			} 
			if(distance < maxHeap.front().priority){
					maxHeap.dequeue()
					maxHeap.enqueue(index, distance)
			}
			index++
	}
	let count = 0
	while(count < k){
			const currentClosest = maxHeap.dequeue().element
			returnArray.push(points[currentClosest])
			count++
	}

	return returnArray
};

// Runtime:  309 ms (beats 68.34%)
// Memory Usage: 62 MB (beats 29.1%)
// Comment:  stores up to k elements in a max heap. if a distance is less than the first element in the max heap, the first element is removed and the new distance is enqueued
var kClosestUsingMaxHeap = function(points, k) {

	const maxHeap = new MaxPriorityQueue();
	const returnArray = []
	for(const [x,y] of points){
			const distance = Math.sqrt(x**2 + y**2)
			if(maxHeap.size() < k){
			maxHeap.enqueue([x,y], distance)
			continue;
			} 
			if(distance < maxHeap.front().priority){
					maxHeap.dequeue()
					maxHeap.enqueue([x,y], distance)
			}

	}
	let count = 0
	while(count < k){
			const currentClosest = maxHeap.dequeue().element
			returnArray.push(currentClosest)
			count++
	}

	return returnArray
};

// Runtime:  326 ms (beats 67.16%)
// Memory Usage:  62.4 MB (beats 25.27%)
var kClosestUsingMinHeap = function(points, k) {
	// let distances = {}
	const minHeap = new MinPriorityQueue();
	const returnArray = []
	for(const [x,y] of points){
			const distance = Math.sqrt(x**2 + y**2)
			minHeap.enqueue([x,y], distance)
			// distances[distance] = [x, y]

	}
	let count = 0
	while(count < k){
			const currentClosest = minHeap.dequeue().element
			returnArray.push(currentClosest)
			count++
	}

	return returnArray
};