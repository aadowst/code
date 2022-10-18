// from hackerrank.com

// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function gridChallenge(grid){
	for(let i = 0; i < grid.length; i++){
		grid[i] = grid[i].split("").sort().join("")
	}
	for(let j = 0; j < grid.length - 1; j++){
		for(let k = 0; k < grid.length; k++){
			if(grid[j][k] > grid[j + 1][k]) return "NO"
		}
	}
	return "YES"
}