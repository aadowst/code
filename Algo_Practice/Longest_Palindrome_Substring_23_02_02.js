// https://leetcode.com/problems/longest-palindromic-substring/

// Runtime: 1010 ms (beat 20.7%)
// Memory:  85 MB (beats 5.1%)
// Comment:  tried dynamic programming approach, but much worse than my expand in the middle solutions below!!

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let maxLength = 1;
	let substring = s[0]
	let lookupTable = Array(s.length).fill(0).map(()=> Array(s.length))

	for(let i = 0; i < s.length; i++){
			lookupTable[i][i] = true  // all 1 letter substrings are palindromes
			if(s[i] == s[i+1]) { // check to see if the two letter substring are palindromes
					lookupTable[i][i+1] = true
					maxLength = 2
					substring = s.slice(i, i+2)
			}
			
	}
	for(let substringLength = 3; substringLength <= s.length; substringLength++){
			for(let start = 0; start < s.length; start++){
					const end = start + substringLength -1
					if(end < s.length) checkPalindrome(start, end)  // check if end is in-bounds
			}
	}
	function checkPalindrome(start, end){
			const endsMatch = s[start] === s[end]
			const innerStringIsPalindrome = lookupTable[start + 1][end - 1] == true
			if(endsMatch && innerStringIsPalindrome){
					lookupTable[start][end] = true
					const length = end - start + 1
					if(length > maxLength){
							maxLength = length
							substring = s.slice(start, end + 1)
					}
			}
			else{
					lookupTable[start][end] = false
			}
			
	}
	return substring
};

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