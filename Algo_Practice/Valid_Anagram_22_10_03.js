// From https://leetcode.com/problems/valid-anagram/
// Runtime: 153 ms(faster than 29.99%)
// Memory Usage: 44.1 MB (less than 58.48%)

var isAnagram = function(s, t) {
	if (s.length !== t.length) return false
	let lettersSeen = new Map()
	for(letter of s){
			if (lettersSeen.has(letter)){
					lettersSeen.set(letter, lettersSeen.get(letter)+1)
			} else{
					lettersSeen.set(letter, 1)
			}
	}
	
	for(letter of t){
		if(lettersSeen.get(letter) >= 1){
			lettersSeen.set(letter, lettersSeen.get(letter)-1)
		} else {
			return false
		}
	}
	return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))