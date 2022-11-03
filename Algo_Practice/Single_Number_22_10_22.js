// from leetcode.com/problems/single-number

// Runtime:  82 ms (faster than 89.43%)
// Memory Usage:  46.9 MB (less than 34.12)

var singleNumber = function(nums) {
	const seen = new Set()
	for(const num of nums){
			if(seen.has(num)){
					seen.delete(num)
			}else{
					seen.add(num)
			}
	}
	const object = seen.values()
	for(const item of object) return item
};