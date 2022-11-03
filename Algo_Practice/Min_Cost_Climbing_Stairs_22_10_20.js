// from: https://leetcode.com/problems/min-cost-climbing-stairs/

// Runtime:  85 ms (faster than 78.45%)
// Memory Usage: 42.7 MB (less than 69.67%)

// Explanation: if there were at least 3 steps, the cost of each step would be the minimum of the steps 1 or 2 spots higher than it, plus its own cost. iterate until the end and the return the cost of either the first or second steps, whichever is less

var minCostClimbingStairs = function(cost) {
	for(let i = cost.length-3; i >=0; i--){
			cost[i] += Math.min(cost[i+1], cost[i+2])
	}
	return Math.min(cost[0], cost[1])
};