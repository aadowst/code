// From https://leetcode.com/problems/contains-duplicate/
// Runtime: 162 ms(faster than 36.99%)
// Memory Usage: 51.2 MB (less than 39.99%)


var containsDuplicateObject = function(nums) {
	const integersSeen = {}
	for(const integer of nums){
			if(integer in integersSeen) return true
			else integersSeen[integer] = 1
	}
	return false
};

nums1 = [1,2,3,1]


// Runtime: 150 ms(faster than 45.56%)
// Memory Usage: 50.76 MB (less than 62.55%)
var containsDuplicateSet = function(nums) {
	return new Set(nums).size !== nums.length
}

console.log(containsDuplicateSet(nums1))