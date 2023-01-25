// https://leetcode.com/problems/min-cost-to-connect-all-points/

const points1 = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
]; // expected:  20
const points2 = [
  [3, 12],
  [-2, 5],
  [-4, 1],
]; // expected:  18


// Runtime:  150 ms (beats 90.15%)
// Memmory:  44.3 MB (beats 96.6%)
// Strategy:  find lowest cost connection to a point and add it. then find lowest new connection to the expanded collection. continue until all connections (n -1) are made

function minCostConnectPointsArray(points) {
  const costs = Array(points.length).fill(Number.POSITIVE_INFINITY);
  let totalCost = 0;
  costs[0] = 0; // no cost to add first point
  let next = 0;

  for (let connections = 1; connections < points.length; connections++) {
    let minCost = Number.POSITIVE_INFINITY;
    let point;
    for (let i = 1; i < points.length; i++) {
      if (costs[i] == 0) continue;
      const cost =
        Math.abs(points[i][0] - points[next][0]) +
        Math.abs(points[i][1] - points[next][1]);
      costs[i] = Math.min(costs[i], cost);
      if (costs[i] < minCost) {
        minCost = costs[i];
        point = i;
      }
    }
    totalCost += minCost;
    costs[point] = 0;
    next = point;
  }
  return totalCost;
}

// Runtime:  1638 ms (beats 52.22%)
// Memory:  156 (beats 24.14%)
// Strategy:  Prim's algo for minimum spanning tree using a minHeap (built into Leetcode)

function minCostConnectPointsPrimsRefactored(points) {
  const adjacencyList = {};
  for (let i = 0; i < points.length; i++) {
    adjacencyList[i] = [];
  }

  // create edge list w/ cost of each
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const cost = calculateManhattanDistance(points[i], points[j]);
      adjacencyList[i].push([cost, j]);
      adjacencyList[j].push([cost, i]);
    }
  }

  function calculateManhattanDistance(coordsA, coordsB) {
    return (
      Math.abs(coordsA[0] - coordsB[0]) + Math.abs(coordsA[1] - coordsB[1])
    );
  }
  let totalCost = 0;
  let visited = new Set();
  const minHeap = new MinPriorityQueue();
  minHeap.enqueue(0, 0); // index (aka element), cost (aka priority)
  while (visited.size < points.length) {
    let taskObject = minHeap.dequeue();
    while (visited.has(taskObject.element)) {
      taskObject = minHeap.dequeue();
    }
    const { element, priority } = taskObject;
    totalCost += priority;
    visited.add(element);
    for (const [neighborCost, neighborPoint] of adjacencyList[element]) {
      if (visited.has(neighborPoint)) continue;
      minHeap.enqueue(neighborPoint, neighborCost);
    }
  }
  return totalCost;
}

// Strategy:  Prim's Algo for minimum spanning tree graph
// Comment:  works, but time limit exceeded on leetcode

var minCostConnectPointsPrims = function (points) {
  const adjacencyList = {};
  for (let i = 0; i < points.length; i++) {
    adjacencyList[i] = [];
  }

  // create edge list w/ cost of each
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const cost = calculateManhattanDistance(points[i], points[j]);
      adjacencyList[i].push([cost, j]);
      adjacencyList[j].push([cost, i]);
    }
  }

  function calculateManhattanDistance(coordsA, coordsB) {
    return (
      Math.abs(coordsA[0] - coordsB[0]) + Math.abs(coordsA[1] - coordsB[1])
    );
  }
  let totalCost = 0;
  let visited = new Set();
  const minHeap = [[0, 0]]; // [cost, index]
  while (visited.size < points.length) {
    if (minHeap.length > 1) minHeap.sort((a, b) => b[0] - a[0]); // sort so lowest cost is at end
    let [cost, index] = minHeap.pop();
    while (visited.has(index)) {
      [cost, index] = minHeap.pop();
    }
    totalCost += cost;
    visited.add(index);
    for (const [neighborCost, neighborPoint] of adjacencyList[index]) {
      if (visited.has(neighborPoint)) continue;
      minHeap.push([neighborCost, neighborPoint]);
    }
  }
  return totalCost;
};

// First Attempt
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let totalPoints = 0;
  const connectionsMade = new Set();
  for (let i = 0; i < points.length; i++) {
    let minPoints = Number.POSITIVE_INFINITY;
    let connections = [];
    for (let j = 0; j < points.length; j++) {
      if (i == j) continue;
      const cost = calculateManhattanDistance(points[i], points[j]);

      if (cost < minPoints) {
        connections = [`${i},${j}`, `${j},${i}`];

        minPoints = cost;
      }
    }
    if (connections.length === 0) continue;
    else if (connectionsMade.has(connections[0])) continue;
    else {
      console.log(connections, minPoints);
      totalPoints += minPoints;
      for (const connection of connections) {
        connectionsMade.add(connection);
      }
    }
  }

  function calculateManhattanDistance(coordsA, coordsB) {
    return (
      Math.abs(coordsA[0] - coordsB[0]) + Math.abs(coordsA[1] - coordsB[1])
    );
  }

  return totalPoints;
};
