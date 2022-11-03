// from:  leetcode.com/problems/counting-bits

// Runtime:  145 ms (faster than 62.43%)
// Memory Usage:  48.3 MB (less than 80.23%)
var countBits = function(n) {
	let ans = [];
	for(let i = 0; i <= n; i++){
			let count = 0;
			let int = i
			while(int !== 0){
					const bitComparison = int & 1
					if(bitComparison ===1) count++;
					int >>= 1
			}
			ans.push(count)
	}
	return ans
};

// Runtime:  222 ms (faster than 14.93%)
// Memory Usage: 53.5 MB (less than 23.90%)
var countBitsStringMethod = function(n) {
	let ans = [];
	for(let i = 0; i <= n; i++){
			const intString = i.toString(2)
			const numOnes = intString.replaceAll("0", "")
			ans.push(numOnes.length)
	}
	return ans
};

// Runtime:  237 ms (faster than 10.28%)
// Memory Usage: 53.6 MB (less than 22.52%)
// Comment: surprised this was so slow!
var countBitsStringChainedMethods = function(n) {
	let ans = [];
	for(let i = 0; i <= n; i++){
			ans.push(i.toString(2).replaceAll("0", "").length)
	}
	return ans
	
};