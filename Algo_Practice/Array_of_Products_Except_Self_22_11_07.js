// from:  https://leetcode.com/problems/product-of-array-except-self/

// Comment:  I though the early exit would have led to better time performance
// Runtime:  218 ms (faster than 20.51%)
// Memory Usage:  56.5 MB (less than 14.55%)

var productExceptSelf = function(nums) {
	let zeroCount = 0;
	let leftMultiplier = 1;  //this will be the product of all numbers to the left of an index
	let answer = []

	//loop left to right through the array, pushing leftMultplier and update it by multiplying by the value at i
	for(let i = 0; i < nums.length; i++){
			if(nums[i] == 0) zeroCount++
			if(zeroCount > 1) return Array(nums.length).fill(0)
			answer.push(leftMultiplier)
			leftMultiplier = nums[i] * leftMultiplier
	}
	console.log(answer)
	let rightMultiplier = 1; //this will be the product of all numbers to the right of an index
		//loop right to left back through the array and update the value in the answer array by multiplying by the value at j
	for(let j = nums.length -1; j >= 0; j--){
			answer[j] = answer[j] * rightMultiplier
			rightMultiplier = nums[j] * rightMultiplier
	}
	return answer
};

// Comment:  second attempt (used division, which wasn't allowed, though)
// Runtime:  161 ms (faster than 76.81%)
// Memory Usage:  52.1 MB (less than 96.23%)
var productExceptSelfWithDivision = function(nums) {
	const answer = []
	let total= 1
	let zeroCount = 0;
	for(let i = 0; i < nums.length; i++) 
			if(nums[i] !== 0) total *= nums[i]
			else zeroCount++
			if(zeroCount > 1) return Array(nums.length).fill(0)
	for(let j = 0; j < nums.length; j++){
			if(nums[j]===0) answer[j] = total
			else if(zeroCount == 1) answer[j] = 0
			else{
			answer[j] = total * 1/nums[j]
			}
	}
	return answer
};

// Comment:  first attempt (slow, obviously)
var productExceptSelfDoubleLoop = function(nums) {
	const answer = Array(nums.length).fill(1)
	for(let i = 0; i < nums.length; i++){
			for(let j=0; j < nums.length; j++){
					if(i != j){
							answer[i] = answer[i] * nums[j];
							
					}
			}
	}
	return answer
};