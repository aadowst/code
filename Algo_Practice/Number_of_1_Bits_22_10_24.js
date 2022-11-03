// from:  https://leetcode.com/problems/number-of-1-bits/

// Runtime:  87 ms (faster than 77.13%)
// Memory Usage:  42.6 MB (less than 50.40%)

var hammingWeight = function(n) {
	let count = 0;
	while(n !== 0){
		// explanation:  & is the bitwise AND operator, so returns 1 if the bits match (in this case, if both are 1)
		count += 1 & n;
		n >>>=1
	}
	return count
}