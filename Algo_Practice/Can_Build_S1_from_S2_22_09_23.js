/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case

.indexOf will only tell you if the letter is found one time
*/

const strA1 = 'Hello World';
const strB1 = 'lloeh wordl';
const expected1 = true;

const strA2 = 'Hey';
const strB2 = 'hello';
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = 'hello';
const strB3 = 'helo';
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = 'hello';
const strB4 = 'llheo';
const expected4 = true;

const strA5 = 'hello';
const strB5 = 'heloxyz';
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
	if(s1.length !== s2.length) return false
	const s1Dictionary = {};
	const s2Dictionary = {};
	for (let i = 0; i < s1.length ; i++){
		const s1Letter = s1[i].toLowerCase()
		const s2Letter = s2[i].toLowerCase()
		if(s1Letter in s1Dictionary){
			s1Dictionary[s1Letter] = s1Dictionary[s1Letter] + 1
		} else{
			s1Dictionary[s1Letter] = 1
		}
		if(s2Letter in s2Dictionary){
			s2Dictionary[s2Letter] = s2Dictionary[s2Letter] + 1
		} else{
			s2Dictionary[s2Letter] =1
		}
	}
const s1Keys = Object.keys(s1Dictionary)
for (let j = 0; j < s1Keys.length; j++){
	if(s1Dictionary[s1Keys[j]] !== s2Dictionary[s1Keys[j]]) return false
}
return true
}

console.log(canBuildS1FromS2(strA4, strB4))