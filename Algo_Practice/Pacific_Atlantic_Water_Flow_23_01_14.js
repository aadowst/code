// https://leetcode.com/problems/pacific-atlantic-water-flow

// Runtime:  124 ms (beats 81.30%)
// Memory:  50.7 MB (beats 71.80%)
// Strategy:  add all cells on perimeter to appropriate set. run dfs on all neighbors and add them to the appropriate set if height is >= to previous

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
	const output = []
	const reachPacific = new Set()
	const reachAtlantic = new Set()

	const maxRow = heights.length - 1
	const maxColumn = heights[0].length - 1

	function canReach(row, column, oceanSet, prevHeight){
			let outOfBounds = row < 0 || row > maxRow || column < 0 || column > maxColumn
			if(outOfBounds || heights[row][column] < prevHeight || oceanSet.has(`${row},${column}`)) return
			oceanSet.add(`${row},${column}`)
			canReach(row + 1, column, oceanSet, heights[row][column])
			canReach(row - 1, column, oceanSet, heights[row][column])
			canReach(row, column + 1, oceanSet, heights[row][column])
			canReach(row, column - 1, oceanSet, heights[row][column])
	}
// check each column in first/last row
	for(let column = 0; column <= maxColumn; column++){
			canReach(0, column, reachPacific, heights[0][column])
			canReach(maxRow, column, reachAtlantic, heights[maxRow][column])
	}

// check each row in first/last column
	for(let row = 0; row <= maxRow; row++){
			canReach(row, 0, reachPacific, heights[row][0])
			canReach(row, maxColumn, reachAtlantic, heights[row][maxColumn])
	}

	for(let row = 0; row <= maxRow; row++){
			for(let column = 0; column <= maxColumn; column++){
					if(reachPacific.has(`${row},${column}`) && reachAtlantic.has(`${row},${column}`)){
							output.push([row,column])
					}
			}
	}
	return output
};