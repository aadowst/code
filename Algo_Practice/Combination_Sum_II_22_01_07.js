// https://leetcode.com/problems/combination-sum-ii/

// Runtime:  42 ms (beats 100%)
// Memory:  43.9 MB (beats 76.70%)
// Comment:  huge improvement!

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2Refactored = function(candidates, target) {
	const collections = []
	const addedToCollections = new Set()
	candidates.sort((a,b) => a - b)
	function generateCollections(subset = [], index = 0, sum = 0){

			if(sum > target) return
			if(sum === target){
					// subset.sort((a,b) => a-b)
					const string = subset.toString()
					if(!addedToCollections.has(string)){
							collections.push([...subset])
							addedToCollections.add(string)
					}
					return
			}
			else if(index > candidates.length) {
					return
			}
			else{

					for(let i = index; i < candidates.length; i++){
							if(i > index && candidates[i] == candidates[i-1]) continue;
							else{
									subset.push(candidates[i])
									generateCollections(subset, i + 1, sum + candidates[i])
									subset.pop()

							}

					}
			}
	
			}
	generateCollections()

	return collections
};


// Runtime: 626 ms (beats 5.4%)
// Memory:  50.9 MB (beats 5.16%)
// Comment:  needed to sort twice and left in a console log, so poor performance
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	const collections = []
	const addedToCollections = new Set()
	candidates.sort((a,b) => a - b)
	function generateCollections(subset = [], index = 0, sum = 0){
			console.log(subset, index, sum)
			if(sum > target) return
			if(sum === target){
					subset.sort((a,b) => a-b)
					const string = subset.toString()
					if(!addedToCollections.has(string)){
							collections.push([...subset])
							addedToCollections.add(string)
					}
					return
			}
			else if(index > candidates.length) {
					return
			}
			else{

					for(let i = index; i < candidates.length; i++){
							if(i > index && candidates[i] == candidates[i-1]) continue;
							else{


									subset.push(candidates[i])
									generateCollections(subset, i + 1, sum + candidates[i])
									subset.pop()

							}

					}
			}
	
			}
	generateCollections()

	return collections
};