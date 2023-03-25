// https://leetcode.com/problems/merge-intervals

// Runtime:  106 ms (beats 59.51%)
// Memory:  48.5 MB (beats 77.83%)

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	const returnArray = []
	intervals.sort((a,b) => a[0] - b[0])
	let current = intervals[0]
	let index = 1
	while(index < intervals.length){
			if(current[1] >= intervals[index][0]){
					current[0] = Math.min(current[0], intervals[index][0])
					current[1] = Math.max(current[1], intervals[index][1])
			} else {
					returnArray.push(current)
					current = intervals[index]
			}
			index++
	}
	returnArray.push(current)
	return returnArray
};