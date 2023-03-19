// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/

// Runtime:  170 ms (beats 91.1%)
// Memory:  72.6 MB (beats 83.15%)
// Strategy:  greedy with early exit

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
	let [firstTarget, secondTarget, thirdTarget] = target
	let foundFirst = false
	let foundSecond = false
	let foundThird = false

	for([first, second, third] of triplets){
			if(first <= firstTarget && second <= secondTarget && third <=thirdTarget){
					if(first === firstTarget) foundFirst = true
					if(second === secondTarget) foundSecond = true
					if(third === thirdTarget) foundThird = true
			}
			if(foundFirst && foundSecond && foundThird) return true
	}
	return false
};