// https://leetcode.com/problems/cheapest-flights-within-k-stops/

// Runtime: 187 ms (beats 27.48%)
// Memory:  53.1 MB (beats 8.94%) when enqueueing objects and 52.2 MB (beats 16.56%) when enqueueing arrays
// Comment:  used a minHeap instead of sorted array (see following solution), but worse performance!
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
	const adjacencyList = Array(n).fill(0).map(()=> [])
	for(const [from, to, price] of flights){
			adjacencyList[from].push([to, price])
	}

	let totalCost = -1
	const visited = new Map()

	const minHeap = new MinPriorityQueue()
	minHeap.enqueue({city: src, stopsMade: 0}, 0)

	while(!minHeap.isEmpty()){


			const removed = minHeap.dequeue()
			const {city, stopsMade} = removed.element
			const runningTotal = removed.priority
			if(city == dst) return runningTotal
			if(stopsMade > k) continue
			visited.set(city, stopsMade)
			for(const [to, price] of adjacencyList[city]){
					if(visited.has(to) && visited.get(to) <= stopsMade + 1) continue
					minHeap.enqueue({city: to, stopsMade: stopsMade + 1}, runningTotal + price)
			}
	}
	return totalCost
};

// Runtime:  139 ms (beats 48.68%)
// Memory:  50.3 MB (beats 36.75%)
// Strategy:  Djikstra's algo with a sorted array
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
	const adjacencyList = Array(n).fill(0).map(()=> [])
	for(const [from, to, price] of flights){
			adjacencyList[from].push([to, price])
	}

	let totalCost = -1
	const visited = new Map()

	const stack = [[src, 0, 0]] // city, runningTotal, stopsMade

	while(stack.length){
			stack.sort((a,b) => b[1] - a[1])
			const [city, runningTotal, stopsMade] = stack.pop()
			if(city == dst) return runningTotal
			if(stopsMade > k) continue
			visited.set(city, stopsMade)
			for(const [to, price] of adjacencyList[city]){
					if(visited.has(to) && visited.get(to) <= stopsMade + 1) continue  // check to see if city has been visited in fewer stops (and thus cheaper)
					stack.push([to, runningTotal + price, stopsMade + 1])
			}
	}
	return totalCost
};

// Comment:  works, but times out on leetcode!
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

var findCheapestPrice = function(n, flights, src, dst, k) {
	const adjacencyList = Array(n).fill(0).map(()=> [])
	for(const [from, to, price] of flights){
			adjacencyList[from].push([to, price])
	}
	let bestPrice = Infinity
	const visitedThisPath = new Set()

	dfs(src, 0, 0)

	function dfs(city, runningTotal, stops){
			if(runningTotal > bestPrice) return
			if(stops > k + 1) return
			if(visitedThisPath.has(city)) return
			if(city == dst) {
					bestPrice = Math.min(bestPrice, runningTotal)
					return
			}
			visitedThisPath.add(city)
			const connections = adjacencyList[city]
			connections.sort((a,b) => a[1] - b[1])
			console.log(connections)
			for(const [to, price] of connections){
					dfs(to, runningTotal + price, stops + 1)
			}
			visitedThisPath.delete(city)
	}
	return bestPrice == Infinity ? -1 : bestPrice
};
const flights1 = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
const flights2 = [[3,4,4],[2,5,6],[4,7,10],[9,6,5],[7,4,4],[6,2,10],[6,8,6],[7,9,4],[1,5,4],[1,0,4],[9,7,3],[7,0,5],[6,5,8],[1,7,6],[4,0,9],[5,9,1],[8,7,3],[1,2,6],[4,1,5],[5,2,4],[1,9,1],[7,8,10],[0,4,2],[7,2,8]]
// findCheapestPrice(4, flights1, 0, 3, 1)
console.log(findCheapestPrice(10, flights2, 6, 0, 7))  // expected 14