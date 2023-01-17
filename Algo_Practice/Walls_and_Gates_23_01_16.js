/*
You are given a m x n 2D grid initialized with these three possible values:
-1: A wall or an obstacle. 
0:   A gate. 
Infinity:  Infinity means an empty room. 

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
*/

let grid1 = [
	[Number.POSITIVE_INFINITY, -1, 0, Number.POSITIVE_INFINITY],
	[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, -1],
	[Number.POSITIVE_INFINITY, -1, Number.POSITIVE_INFINITY, -1],
	[0, -1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
]

const expectedOutput1 = [
	[3, -1, 0, 1],
	[2, 2, 1, -1],
	[1, -1, 2, -1],
	[0, -1, 3, 4]
]

let grid2 = [
	[Number.POSITIVE_INFINITY, -1, 0, Number.POSITIVE_INFINITY],
	[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, -1],
	[Number.POSITIVE_INFINITY, -1, -1, -1],
	[0, -1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
]

const expectedOutput2 = [
	[3, -1, 0, 1],
	[2, 2, 1, -1],
	[1, -1, -1, -1],
	[0, -1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
]

function distanceToGate(grid){

	let visited = new Set()
	const maxRow = grid.length - 1
	const maxColumn = grid[0].length - 1
	const queue = []
	let round = 0

	function bfs(){
		while(queue.length){
			for(let i = 0; i < queue.length; i++){
				const [row, column] = queue.shift()
				grid[row][column] = round
				checkCell(row - 1, column)
				checkCell(row + 1, column)
				checkCell(row, column - 1)
				checkCell(row, column + 1)
			}
			round++
		}
	}
	
	function checkCell(row, column){
		if(row < 0 || row > maxRow || column < 0 || column > maxColumn) return
		if(visited.has(`${row},${column}`)) return
		if(grid[row][column] == -1) return
		visited.add(`${row},${column}`)
		queue.push([row, column])
	}

	for(let row = 0; row <= maxRow; row++){
		for(let column = 0; column <= maxColumn; column++){
			if(grid[row][column] == 0) {
				visited.add(`${row},${column}`)
				queue.push([row, column])
			}
		}
	}

	bfs()
	return grid
}

console.log(distanceToGate(grid1))

function distanceToGateOriginal(grid){

	let visited = new Set()
	const maxRow = grid.length - 1
	const maxColumn = grid[0].length - 1
	const queue = []

	function bfs(){
		while(queue.length){
			const [row, column, round] = queue.shift()
			if(!checkCell(row, column, round)) continue
			if(grid[row][column] !== 0) grid[row][column] = round
			visited.add(`${row},${column}`)
			queue.push([row - 1, column, round + 1])
			queue.push([row + 1, column, round + 1])
			queue.push([row, column - 1, round + 1])
			queue.push([row, column + 1, round + 1])
		}
		
	}
	
	function checkCell(row, column, round){
		if(row < 0 || row > maxRow || column < 0 || column > maxColumn) return false
		if(visited.has(`${row},${column}`)) return false
		if(grid[row][column] == -1) return false
		if(grid[row][column] == 0 && round > 0) return false
		return true
	}

	for(let row = 0; row <= maxRow; row++){
		for(let column = 0; column <= maxColumn; column++){
			if(grid[row][column] == 0) queue.push([row, column, 0])
		}
	}

	bfs()
	return grid
}

// console.log(distanceToGateOriginal(grid1))