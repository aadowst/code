// https://leetcode.com/problems/gas-station/

// Runtime:  77 ms (beats 88.39%)
// Memory:  52.1% (beats 69.67%)
// Comment:  Attempted to simplify code:

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
	let totalGasRemaining = 0
	let currentGasRemaining;
	let stationReached;
	for(let possibleStart = 0; possibleStart < gas.length; possibleStart++){
			stationReached = possibleStart
			currentGasRemaining = 0
			while(stationReached < gas.length){
					const currentGas = getCurrentGas(stationReached)
					totalGasRemaining += currentGas
					currentGasRemaining += currentGas
					if(currentGasRemaining < 0) break
					stationReached++
			}
			if(stationReached == gas.length){
					if(totalGasRemaining >= 0) return possibleStart
					else return -1
			}
			possibleStart = stationReached
	}
	return -1

	function getCurrentGas(index){
			return gas[index] - cost[index]
	}
};

// Runtime:  89 ms (beats 52.34%)
// Memory:  52.2 MB (beats 61.53%)
// Strategy:  Main function sends starting station to helper function. Helper function iterates through subsequent stations, keeping track of the gasRemaining. If gasRemaining drops below zero, helper function returns the current station, which becomes the starting station for the next round. If the current startion has a lower index than the starting station (i.e. the helper has reached the end of the array and continued at the start) then it is not possible and return -1.

// Comment:  works but times out on Leetcode

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
	for(let i = 0; i < gas.length; i++){
			const result = attemptCircuit(i)
			if(result != -1) return result
	}

	function attemptCircuit(startIndex){
			let currentStation = startIndex
			let gasRemaining = gas[currentStation]
			let stationsVisited = 1
					while(stationsVisited <= gas.length){
							gasRemaining -= cost[currentStation]
							if(gasRemaining < 0) return -1
							currentStation++
							if(currentStation > gas.length -1) currentStation = 0
							gasRemaining += gas[currentStation]
							stationsVisited++
					}
			return startIndex
			}
	
	return -1
};