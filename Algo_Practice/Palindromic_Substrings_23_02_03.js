// https://leetcode.com/problems/palindromic-substrings/

// Runtime:  84 ms (beats 58.67%)
// Memory:  43.9 MB (beats 37.48%)
// Strategy:  same as following, but keeping track of a count rather than using a set. This approach is much faster than DP using a 2D array to record which substrings are palindromic

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	let count = 0
	for(let i = 0; i < s.length; i++){
			findPalindromes(i)
	}

	function findPalindromes(i){
			count++
			let left = i - 1
			let right = i + 1
			while(s[right] && s[right] == s[i]){
					count++
					right++
			}
			while(s[left] && s[right] && s[left] == s[right]){
					count++
					left--
					right++
			}
	}

	return count

};

// Runtime:  325 ms (beats 18.80%)
// Memory:  83 MB (beats 5.3%)
// Strategy:  at each index of the string, check for palindromic substrings by expanding from that index. Store substrings in a set

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	const seen = new Set()
	for(let i = 0; i < s.length; i++){
			findPalindromes(i)
	}

	function findPalindromes(i){
			seen.add(i)
			let left = i - 1
			// while(s[left] == s[i]){  // this section is probably redundant
			//     seen.add(`${left},${i}`)
			//     left--
			// }
			let right = i + 1
			while(s[right] && s[right] == s[i]){
					seen.add(`${i},${right}`)
					right++
			}
			while(s[left] && s[right] && s[left] == s[right]){
					seen.add(`${left},${right}`)
					left--
					right++
			}
	}

	return seen.size

};