// https://leetcode.com/problems/combination-sum/

// Runtime:  66 ms (beats 99.49%)
// Memory:  44.5 (beats 98.93%)
var combinationSumBacktracking = function(candidates, target){
	const combinations = []
	const subset = []

	function DFS(index){
		while(index < candidates.length){
			subset.push(candidates[index])
			target -= candidates[index]
			if(target > 0){
				DFS(index)
			}
			if(target === 0){
				combinations.push(subset)
			}
			subset.pop()
			target += candidates[index]
			index++
		}
	}
	DFS(0)
	return combinations
}

// Runtime:  110 ms (beats 62.37%)
// Memory:  49.2 MB (beats 18.75%)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumRecursive = function(candidates, target) {
	const combinations = []
	const subset = []
	// sort in ascending order
	candidates.sort((a,b) => a - b)

	function generateSums(index, subset, currentSum){
			if(currentSum > target) return
			if(currentSum == target) {
					combinations.push(subset)
					return
			}
			for(let i = index; i < candidates.length; i++){
					const candidate = candidates[i]
					generateSums(i, [...subset, candidate], currentSum + candidate)
			}
			
	}
	generateSums(0, subset, 0)
	return combinations
};