// https://leetcode.com/problems/insert-interval/

// Runtime:  63 ms (beats 94.18%)
// Memory:  44.4 MB (beats 39.24%)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
	const returnArray = []
	let index = 0;
	while(index < intervals.length && intervals[index][0] < newInterval[0] && intervals[index][1] < newInterval[0]){
			returnArray.push(intervals[index])
			index++
	}

	// insert at end of intervals
	if(index === intervals.length){
			returnArray.push(newInterval)
			return returnArray
	}

	// insert in middle with merging not required
	if(intervals[index][0] > newInterval[0] && intervals[index][0] > newInterval[1]){
			returnArray.push(newInterval)
			addRemainingIntervals(index)
			return returnArray;
	}

	// insert in middle with mergining
	let start = Math.min(newInterval[0], intervals[index][0])
	let end = Math.max(newInterval[1], intervals[index][1])
	index++
	while(index < intervals.length && end > intervals[index][0]){
			end = Math.max(end, intervals[index][1])
			index++
	}
	returnArray.push([start,end])
	addRemainingIntervals(index)
	return returnArray

	function addRemainingIntervals(index){
			while(index < intervals.length){
					returnArray.push(intervals[index])
					index++
			}
	}
};

console.log(insert([[1,5]], [0,3]))