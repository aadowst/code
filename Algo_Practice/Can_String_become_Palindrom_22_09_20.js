/* 
  Given to me (Neil) in an interview

  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.

  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = '';
const expected1 = false;

const str2 = 'a';
const expected2 = true;

const str3 = 'ddaa';
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = 'dda';
const expected4 = true;
// Explanation: "dad"

const str5 = 'aaadd';
const expected5 = true;
// Explanation: "daaad"

const str6 = 'abc';
const expected6 = false;

/* 
For a string to be able to be re-ordered into a palindrome
It must have an even occurrence of every character
Unless it is odd length, then it can have 1 character that
can have an odd number of occurrences.

Another way to look at it would be, if you cancel out ever char that has a pair,
it can be a palindrome if you are left with 0 or 1 char remaining:
- "dad" the "d" cancels with itself to leave "a"
- "daad" the "d" and "a" cancel with itself to leave nothing
- "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

/**
 * This same approach can be done with an array, using .indexOf instead
 * of .hasOwnProperty and .splice instead of delete, but it's much
 * slower that way because .indexOf and .splice would be a nested loops.
 * - Time: O(n) linear, n = str.length.
 * - Space: O(n) linear.
 */
function canStringBecomePalindromeCharCount(str) {
    if(str.length === 0) return false
    const charsSeen = {}
    for(char of str){
        if(char in charsSeen) charsSeen[char]++
        else charsSeen[char] = 1
    }
    let oddCount = 0
    for(char in charsSeen){
        if(charsSeen[char] % 2 !== 0) oddCount++
        if(oddCount > 1) return false
    }
    return true
}


/**
 * The loop over the object at the end is like the Object.keys loop above,
 * except the above sln already deleted keys that could be cancelled out,
 * so there are less iterations required in above sln, but the overall
 * time complexity remains the same.
 * - Time: O(n) linear, n = str.length.
 * - Space: O(n) linear.
 */
function canStringBecomePalindromeCancelChars(str) {
    if(str.length === 0) return false
    const uniqueChars = {}
    for(char of str){
        if(char in uniqueChars) delete uniqueChars[char]
        else uniqueChars[char] = 1
    }
    return Object.keys(uniqueChars).length > 1 ? false :  true
}

console.log(canStringBecomePalindromeCancelChars(str6))
