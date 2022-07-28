/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/
// pseudocode
// start a sum variable
// add first digit of the string to the sum
// add the next digit
// repeat until you have added all of the digits
// repeat the process with the sum (if it is 2+ digits)
const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 158324;
const expected4 = 5;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if(num < 10){
        return num
    }
    var string = num.toString()
    var sum = 0;
        for(let i=0; i<string.length; i++){
            sum += parseInt(string[i])
        }
    return sumToOneDigit(sum)
}
console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))

// /*****************************************************************************/

// /* 
//   String Anagrams
//   Given a string,
//   return stray where each element is a string representing a different anagram (a different sequence of the letters in that string).
//   Ok to use built in methods
// */

// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

// 1 2 3 4
// 1 2 4 3
// 1 4 3 2


const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter
// pseudocode:
// start with first letter
// 
/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// function generateAnagrams(str) {
//         var anagrams = {};
//         str.forEach(generateAnagrams(str) {
//             var recurse = generateAnagrams(ana, str) {
//                 if (str === '') 
//                     anagrams[ana] = 1;
//                 for (var i = 0; i < str.length; i++)
//                     recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
//             };
//             recurse('', str);
//         });
//         return Object.keys(anagrams);
//     }
    

    function anagram(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const result = {};
        for (let i=0;i<str1.length;i++) {
            let char = str1[i];
            result[char] = result[char] ? result[char] += 1 : result[char] = 1;
        }
    
        for (let i=0;i<str2.length;i++) {
            let char = str2[i];
            if (!result[char]) {
                return false;
            }
            else {
                result[char] = -1;
            }
        }
        return true;
    }
    

