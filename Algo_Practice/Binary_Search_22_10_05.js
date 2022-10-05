//  from https://leetcode.com/problems/binary-search/

// Runtime: 117 ms(faster than 22.58%)
// Memory Usage: 45.4 MB (less than 20.38%)
// Comment:  someone with essentially the same solution listed it as taking 67 ms, so not sure why the time disparity

var search = function(nums, target) {
	let leftPointer = 0;
	let rightPointer = nums.length -1

	while(leftPointer <= rightPointer){
		const searchIndex = Math.floor((rightPointer+leftPointer)/2)
		if(nums[searchIndex]== target){
			return searchIndex
		}	
		else if(nums[searchIndex] < target ){
			leftPointer = searchIndex + 1
		} 
		else {
			rightPointer = searchIndex -1
		}
	}
	return -1
};

const nums = [-1,0,3,5,9,12]
console.log(search(nums, 9))