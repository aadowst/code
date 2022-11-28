// from:  https://leetcode.com/problems/search-a-2d-matrix/

// Comment:  slower and less elegant than original solution. Strategy was to first find the row the target might be in and then search for the column
// Runtime: 120 ms, faster than 7.22% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 42.3 MB, less than 34.22% of JavaScript online submissions for Search a 2D Matrix.
var searchMatrix = function (matrix, target) {
  let height = matrix.length;
  let width = matrix[0].length;
  if (target < matrix[0][0] || target > matrix[height - 1][width - 1])
    return false;

  let top = 0;
  let bottom = height - 1;
    let row= Math.floor((top + bottom) / 2);
  while (top <= bottom) {
    row = Math.floor((top + bottom) / 2);
    const leftValue = matrix[row][0];
		const rightValue = matrix[row][width - 1]
    if (target === leftValue || target === rightValue) return true;
    else if (target < leftValue) {
      bottom = row - 1;
    } else if(target > rightValue){
      top = row + 1;
			
    }else break
  }

	let left = 0
	let right = width - 1
	while(left <= right){
		const mid = Math.floor((left + right) / 2);
    const value = matrix[row][mid];
    if (target === value) return true;
    else if (target < value) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
	}

  return false;
};

// Comment:  strategy similar to doing binary search in a 1d matrix. leftPointerPos and rightPointerPos correspond to the index of a flattened (i.e. 1d) matrix. The helper function converts these values back into 2d array indexes. Eg a 3 x 4 matrix would have positions 0 (matrix[0][0]) to 11 (matrix[2][3]).

// Runtime: 114 ms, faster than 13.18% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 42.3 MB, less than 34.22% of JavaScript online submissions for Search a 2D Matrix.
var searchMatrixWithHelper = function (matrix, target) {
  let height = matrix.length;
  let width = matrix[0].length;
	// check to see if target is out of bounds
  if (target < matrix[0][0] || target > matrix[height - 1][width - 1])
    return false;
  let leftPointerPos = 0;
  let rightPointerPos = height * width - 1;
  while (leftPointerPos <= rightPointerPos) {
    const mid = Math.floor((leftPointerPos + rightPointerPos) / 2);
    const [row, column] = determineIndexes(mid);
    const value = matrix[row][column];
    if (target === value) return true;
    else if (target < value) {
      rightPointerPos = mid - 1;
    } else {
      leftPointerPos = mid + 1;
    }
  }

  return false;

  function determineIndexes(value) {
    let row = Math.floor(value / width);
    let column = value % width;
    return [row, column];
  }
};

console.log(
  searchMatrix(
    [
      [1],
      [3]
		],
    2
  )
);
