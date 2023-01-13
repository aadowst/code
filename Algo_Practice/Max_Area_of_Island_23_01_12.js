const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

// Runtime:  92 ms (beats 73.66%)
// Memory: 44.6 MB (beats 89.94%)
// Comment:  similar performance to solution that mutates grid (see below)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
	let maxArea = 0
	const depth = grid.length
	const width = grid[0].length
	let visited = []
	let currentArea = 0
	for(let i = 0; i < depth; i++){
			const row = []
			for(let j = 0; j < width; j++){
					row.push(false)
			}
			visited.push(row)
	}
	for(let row = 0; row < depth; row++){
			for(let column = 0; column < width; column++){
					if(visited[row][column] || grid[row][column] === 0) continue
					exploreIsland(row, column)
					maxArea = Math.max(maxArea, currentArea)
					currentArea = 0
			}
	}

	function exploreIsland(row, column){
			if(row < 0 || row >= depth || column < 0 || column >= width) return
			if(visited[row][column]) return
			if(grid[row][column] == 0) return
			visited[row][column] = true
			currentArea++
			exploreIsland(row - 1, column);
			exploreIsland(row + 1, column);
			exploreIsland(row, column + 1);
			exploreIsland(row, column - 1);
	}
	return maxArea
};


// Runtime:  87 ms (beats 80.66%)
// Memory:  44.7 MB (beats 86.48%)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
	let maxArea = 0
	const depth = grid.length
	const width = grid[0].length

	let currentArea = 0

	for(let row = 0; row < depth; row++){
			for(let column = 0; column < width; column++){
					if(grid[row][column] === 0) continue
					exploreIsland(row, column)
					maxArea = Math.max(maxArea, currentArea)
					currentArea = 0
			}
	}

	function exploreIsland(row, column){
			if(row < 0 || row >= depth || column < 0 || column >= width) return
			if(grid[row][column] == 0) return
			grid[row][column] = 0
			currentArea++
			exploreIsland(row - 1, column);
			exploreIsland(row + 1, column);
			exploreIsland(row, column + 1);
			exploreIsland(row, column - 1);

	}

	return maxArea
};