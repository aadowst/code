// from:  leetcode.com/problems/valid-sudoku

// Comment:  code is much more readible!
// Runtime:  138 ms (faster than 42.62%)
// Memory Usage:  46.4 MB (less than 37.39%)

var isValidSudokuBoxLookup = function(board) {
	let numbersSeen = new Set()
	for(let i = 0; i < 9; i++){
			for(let j = 0; j < 9; j++){
				const val = board[i][j]
					if(isNaN(val)) continue
					// check for duplicates in row
					if(numbersSeen.has(`row${i}number${val}`)) return false
					else numbersSeen.add(`row${i}number${val}`)
					// check for duplicates in column
					if(numbersSeen.has(`column${j}number${val}`)) return false
					else numbersSeen.add(`column${j}number${val}`)
					// check for duplicates in box
					const boxNumber = boxLookup(i,j)
					if(numbersSeen.has(`box${boxNumber}number${val}`)) return false
					else numbersSeen.add(`box${boxNumber}number${val}`)
			}
		}
	return true
};

var boxLookup = function(row, column){
	const boxNumber = Math.floor(row/3) * 3 + Math.floor(column/3)
	return boxNumber
}

// Runtime:  168 ms (faster than 15.86%)
// Memory Usage:  48.1 MB (less than 18.33%)
// Comment: could be dryer!
var isValidSudokuOriginal = function(board) {
	let numbersSeen = new Set()
	for(let i = 0; i < 9; i++){
			for(let j = 0; j < 9; j++){
					if(isNaN(board[i][j])) continue
					// check for duplicates in row
					if(numbersSeen.has(`row${i}number${board[i][j]}`)) return false
					else numbersSeen.add(`row${i}number${board[i][j]}`)
					// check for duplicates in column
					if(numbersSeen.has(`column${j}number${board[i][j]}`)) return false
					else numbersSeen.add(`column${j}number${board[i][j]}`)
					// check for duplicates in box
					if(i < 3){
							if(j<3){
									if(numbersSeen.has(`box1number${board[i][j]}`)) return false
									else numbersSeen.add(`box1number${board[i][j]}`)
							}else if(j < 6){
									if(numbersSeen.has(`box2number${board[i][j]}`)) return false
									else numbersSeen.add(`box2number${board[i][j]}`)
							}else{
									if(numbersSeen.has(`box3number${board[i][j]}`)) return false
									else numbersSeen.add(`box3number${board[i][j]}`)                    
							}
					} else if (i< 6){

							if(j<3){
									if(numbersSeen.has(`box4number${board[i][j]}`)) return false
									else numbersSeen.add(`box4number${board[i][j]}`)
							}else if(j < 6){
									if(numbersSeen.has(`box5number${board[i][j]}`)) return false
									else numbersSeen.add(`box5number${board[i][j]}`)
							}else{
									if(numbersSeen.has(`box6number${board[i][j]}`)) return false
									else numbersSeen.add(`box6number${board[i][j]}`)                    
							}
					
					}else{
							if(j<3){
									if(numbersSeen.has(`box7number${board[i][j]}`)) return false
									else numbersSeen.add(`box7number${board[i][j]}`)
							}else if(j < 6){
									if(numbersSeen.has(`box8number${board[i][j]}`)) return false
									else numbersSeen.add(`box8number${board[i][j]}`)
							}else{
									if(numbersSeen.has(`box9number${board[i][j]}`)) return false
									else numbersSeen.add(`box9number${board[i][j]}`)                    
							}
					}
			}
	}
	return true
};