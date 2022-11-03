/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str, arr = []) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '?') {
      var strA = str.slice(0, i) + "0" + str.slice(i + 1, str.length);
      var strB = str.slice(0, i) + "1" + str.slice(i + 1, str.length);
      console.log("index is",i, strA, strB)
      binaryStringExpansion(strA, arr)
      binaryStringExpansion(strB, arr)
      return arr
    }
  }
  arr.push(str)
  return arr
}
console.log(binaryStringExpansion("1?11?111?"))

// function binaryStringExpansion(str1, str2, arr = []) {
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] == '?') {
//       var strA = str1.slice(0, i) + "0" + str1.slice(i + 1, str1.length);
//       var strB = str1.slice(0, i) + "1" + str1.slice(i + 1, str1.length);

//       binaryStringExpansion(strA, strB, arr)
//     } else if (str2[i] == '?') {
//       var strA = str2.slice(0, i) + "0" + str2.slice(i + 1, str2.length);
//       var strB = str2.slice(0, i) + "1" + str2.slice(i + 1, str2.length);

//       binaryStringExpansion(strA, strB, arr)
//     }
//   }

//   arr.push(str1, str2)
//   return arr
// }