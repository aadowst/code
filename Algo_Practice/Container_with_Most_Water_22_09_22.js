// Comment:  added two pointer solution (instead of nested loops)
// Runtime: 131 ms, faster than 48.48% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 49.7 MB, less than 48.03% of JavaScript online submissions for Container With Most Water.

var maxArea = function(height) {
	let maxArea = 0;
	let leftPointer = 0;
	let rightPointer = height.length - 1
	while(leftPointer < rightPointer){
			const currentHeight = Math.min(height[leftPointer], height[rightPointer])
			const currentWidth = rightPointer - leftPointer
			const currentArea = currentHeight * currentWidth
			maxArea = Math.max(maxArea, currentArea)
			if(height[leftPointer] < height[rightPointer]) leftPointer ++
			else if (height[leftPointer] === height[rightPointer]) {
					leftPointer++;
					rightPointer--;
			}
			else rightPointer--
	}
	return maxArea
};


/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.

See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
	let maxArea = 0;
	for (let i = 0; i < heights.length; i++) {
		for (let j = i + 1; j < heights.length; j++) {
			const length = j - i;
			const height = Math.min(heights[i], heights[j]);
			const currentArea = length * height
			maxArea = Math.max(currentArea, maxArea)
		}
	}
	return maxArea
}

console.log(containerWithMostWater(heights1))
console.log(containerWithMostWater(heights2))
console.log(containerWithMostWater(heights3))
console.log(containerWithMostWater(heights4))