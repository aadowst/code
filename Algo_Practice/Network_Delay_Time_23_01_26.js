// https://leetcode.com/problems/network-delay-time/

// Runtime:  95 ms (beats 93.93%)
// Memory:  48.2 MB (beats 93.93%)
// Strategy:  uses Bellman-Ford algo

function networkDelayTimeBellmanFordAlgo(times, n, k) {
  const timeToReach = Array(n + 1).fill(Infinity);
  timeToReach[0] = null; // to be avoided in Math.max calc at end
  timeToReach[k] = 0; // starting at node k
  for (let i = 0; i < n; i++) {
    let updated = false;
    for (const [source, target, time] of times) {
      if (timeToReach[source] == Infinity) continue;
      if (timeToReach[target] > timeToReach[source] + time) {
        timeToReach[target] = timeToReach[source] + time;
        updated = true;
      }
    }
    if (!updated) break;
  }
  let maxTime = Math.max(...timeToReach);
  return maxTime == Infinity ? -1 : maxTime;
}

const times1 = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
]; // n = 4, k = 2; expected: 2

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// Runtime:  166 ms (beats 41.42%)
// Memory:  53.3 MB (beats 23.75%)
var networkDelayTime = function (times, n, k) {
  // create adjacency list
  // start BFS at node k
  // add its neighbors to minHeap
  // start a timer
  // when timer = w value(s), dequeue node(s)
  // add node(s) neighbors to stack (adding current time to their w value)
  // if stack is empty, if nodes visited is equal to n, return timer val. else, return -1

  const adjList = Array(n + 1)
    .fill(0)
    .map(() => []);
  for (const [source, target, time] of times) {
    adjList[source].push([target, time]);
  }
  const visited = new Set();
  const minHeap = new MinPriorityQueue();
  let timer = 0;

  function enqueueNeighbors(node) {
    visited.add(node);
    let neighbors = adjList[node];
    if (!neighbors) return;
    for (const [target, time] of neighbors) {
      if (!visited.has(target)) minHeap.enqueue(target, time + timer);
    }
    // set adjList[node] = []?
  }

  enqueueNeighbors(k);

  while (!minHeap.isEmpty() && visited.size < n) {
    let front = minHeap.front();
    while (front && front.priority <= timer) {
      const removed = minHeap.dequeue();
      if (!visited.has(removed.element)) enqueueNeighbors(removed.element);
      front = minHeap.front();
    }
    if (visited.size < n) timer++;
  }

  return visited.size == n ? timer : -1;
};
networkDelayTime(times1, 4, 2);
