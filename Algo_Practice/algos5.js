
/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.9;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num, i=1) {
    num = Math.floor(num)
    if(num<0) return 0
    // console.log(i)
    if(i==num){
        return num
    } 
    return i + recursiveSigma(num, i+1)
}

console.log(recursiveSigma(two_num1))
console.log(recursiveSigma(two_num2))
console.log(recursiveSigma(two_num3))