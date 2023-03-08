// https://leetcode.com/problems/interleaving-string/

// Runtime:  69 ms (beats 77.2%)
// Memory:  44.9 MB (beats 59.55%)

var isInterleaveSipmlified = function(s1, s2, s3) {
	if(s1.length + s2.length != s3.length) return false

	const seen = new Map()
	return testIterations(0,0)

	function testIterations(index1, index2){
	
		if(index1 == s1.length && index2 == s2.length) return true

		const key = `${index1},${index2}`
		if(seen.has(key)) return seen.get(key)

		const index3 = index1 + index2
		const index1Inbounds = index1 < s1.length
		const index2Inbounds = index2 < s2.length

		if(index1Inbounds && s1[index1] == s3[index3] && testIterations(index1 + 1, index2)) return true
		if(index2Inbounds && s2[index2] == s3[index3] && testIterations(index1, index2 + 1)) return true

		seen.set(key, false)
		return false
	}
};


// Runtime:  57 ms (beats 98.38%)
// Memory:  45.5 MB (beats 39.81%)
// Strategy:  memoized brute force
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleaveMemoized = function(s1, s2, s3) {
	const seen = new Map()
	let foundInterleaving = false;
	return testIterations(0,0,0)

	function testIterations(index1, index2, index3){
			const key = `${index1},${index2},${index3}`

			if(seen.has(key)) return seen.get(key)

			if(index3 == s3.length){
					if(index1 == s1.length && index2 == s2.length){
							foundInterleaving = true
							return true
					}
					else{
							seen.set(key, false)
							return false
					} 
			}

			const index1Inbounds = index1 < s1.length
			const index2Inbounds = index2 < s2.length

			if(index1Inbounds && index2Inbounds && s1[index1] == s3[index3] && s2[index2] == s3[index3]){
					foundInterleaving = testIterations(index1 + 1, index2, index3 + 1) || testIterations(index1, index2 + 1, index3 + 1)
			}
			else if(index1Inbounds && s1[index1] == s3[index3]){
					foundInterleaving = testIterations(index1 + 1, index2, index3 + 1)
			}
			else if(index2Inbounds && s2[index2] == s3[index3]){
					foundInterleaving = testIterations(index1, index2 + 1, index3 + 1)
			}
			seen.set(key, foundInterleaving)
			return foundInterleaving
	}
};


// Strategy:  bruteforce
// Comment:  works but times out on Leetcode

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleaveBruteForce = function(s1, s2, s3) {
	return testIterations(0,0,0)
	function testIterations(index1, index2, index3){
			if(index3 == s3.length){
					if(index1 == s1.length && index2 == s2.length) return true
					else return false
			}
			const index1Inbounds = index1 < s1.length
			const index2Inbounds = index2 < s2.length

			let foundInterleaving;

			if(index1Inbounds && index2Inbounds && s1[index1] == s3[index3] && s2[index2] == s3[index3]){
					foundInterleaving = testIterations(index1 + 1, index2, index3 + 1) || testIterations(index1, index2 + 1, index3 + 1)
			}
			else if(index1Inbounds && s1[index1] == s3[index3]){
					foundInterleaving = testIterations(index1 + 1, index2, index3 + 1)
			}
			else if(index2Inbounds && s2[index2] == s3[index3]){
					foundInterleaving = testIterations(index1, index2 + 1, index3 + 1)
			}
			else foundInterleaving = false

			return foundInterleaving
	}
};