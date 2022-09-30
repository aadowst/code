/*from Leetcode:  https://leetcode.com/problems/ransom-note/
Runtime: 160 ms(faster than 27.48%)
Memory Usage: 44.7 MB (less than 64.80%)
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	if(ransomNote.length > magazine.length) return false
	const lettersInMagazine = {}
	for(letter of magazine){
			if(letter in lettersInMagazine) lettersInMagazine[letter]++
			else lettersInMagazine[letter] = 1
	}
	for(letter of ransomNote){
			if(lettersInMagazine[letter] > 0){
					lettersInMagazine[letter]--
			}else return false
	}
	return true
};

// Notes:  better solutions used splice or replace to remove characters from magazine after they'd been seen w/o having to make a lettersInMagazine object. 


const ransomNote1 = "a"
const magazine1 = "b"
// expected: false
const ransomeNote2 = "aa"
const magazine2 = "ab"
// expected: false
const ransomNote3 = "ab"
const magazine3 = "aab"
// expected: true