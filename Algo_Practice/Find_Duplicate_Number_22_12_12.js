// https://leetcode.com/problems/find-the-duplicate-number/

// Comment:  the solution is an implementation of Floyd's cycle finding algo, which uses a two pointer,  tortoise and hare approach. Each pointer jumps from its current position to the index that corresponds to its current value (the hare does 2 jumps, while the tortoise does this once). 
// Runtime:  143 ms (beats 61.24%)
// Memory Usage:  49.6 MB (beats 84.93%)

var findDuplicate = function(nums){
	let slow = nums[0]
	let fast = nums[slow]

	// when the pointers equal, they are in somewhere the cycle
	while (slow !=fast){
		slow =nums[slow]
		fast = nums[fast]
		fast = nums[fast]
	}

	//start a new pointer from the beginning. When it is equal to the slow pointer, they are at the start of the cycle, which is the repeated number
	let newPointer = 0
	while(newPointer != slow){
		slow=nums[slow]
		newPointer = nums[newPointer]
	}

	return slow
}

// comment:  solution is supposed to be O(1) for space complexity, so this wouldn't work, because it's O(n)
// Runtime:  161 ms (beats 48.85%)
// Memory Usage:  60.9 MB (beats 27.81%)
var findDuplicateSet = function(nums) {
	const seen = new Set()
	for(const num of nums){
			if(seen.has(num)) return num
			seen.add(num)
	}
};