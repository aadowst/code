// https://leetcode.com/problems/surrounded-regions/

// Runtime:  74 ms (beats 98.63%)
// Memory:  46.7 MB (beats 72.38%)

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	// const output = []
	const maxRow = board.length - 1
	const maxColumn = board[0].length - 1
	const notFlipped = new Set()

	function dfs(row, column){
			if(row < 0 || row > maxRow || column < 0 || column > maxColumn) return
			if(board[row][column] == "X") return
			if(notFlipped.has(`${row},${column}`)) return
			notFlipped.add(`${row},${column}`)

			dfs(row + 1, column)
			dfs(row - 1, column)
			dfs(row, column + 1)
			dfs(row, column - 1)
	}

	for(let column = 0; column <= maxColumn; column++){  // check all columns in first/last rows
			dfs(0, column)
			dfs(maxRow, column)
	}
	for(let row = 0; row <= maxRow; row++){ // check all rows in first/last columns
			dfs(row, 0)
			dfs(row, maxColumn)
	}

	for(let row = 0; row <= maxRow; row++){
			for(let column = 0; column <= maxColumn; column++){
					if(!notFlipped.has(`${row},${column}`)) {
							board[row][column] = "X"
					}
			}
	}

	return board
};