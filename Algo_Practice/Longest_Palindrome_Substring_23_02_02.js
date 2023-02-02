// https://leetcode.com/problems/longest-palindromic-substring/

// Runtime:  122 ms (beats 66.19%)
// Memory:  47.1 MB (beats 51.85%)
// Strategy:  very similar to solution below, but skips iterations that would begin with same char as previous call to findPalindrome

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let longestSubstring = ""
	for(let i = 0; i < s.length; i++){
			i = findPalindrome(i)
	}

	function findPalindrome(i){
			const middleChar = s.charAt(i)
			let left = i
			let right = i
			while(s.charAt(left) === middleChar) left--
			while(s.charAt(right) === middleChar) right++
			const nextStart = right - 1 // take away 1, so that when i is incremented in for loop, it will be at the next, different char
			while(s.charAt(left) && s.charAt(right) && s.charAt(left) == s.charAt(right)){
					left--
					right++
			}
			const substring = s.slice(left + 1, right)
			if(substring.length > longestSubstring.length) longestSubstring = substring
			return nextStart
	}
	return longestSubstring
};


// Runtime:  145 ms (beats 54.25%)
// Memory:  47.4 MB (beats 50.78%)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let longestSubstring = ""
	for(let i = 0; i < s.length; i++){
			findPalindrome(i)
	}

	function findPalindrome(i){
			const middleChar = s.charAt(i)
			let left = i
			let right = i
			while(s.charAt(left) === middleChar) left--
			while(s.charAt(right) === middleChar) right++
			while(s.charAt(left) && s.charAt(right) && s.charAt(left) == s.charAt(right)){
					left--
					right++
			}
			const substring = s.slice(left + 1, right)
			if(substring.length > longestSubstring.length) longestSubstring = substring
	}
	return longestSubstring
};