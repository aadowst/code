//   Missing Value
//   You are given an array of length N that contains, in no particular order,
//   integers from 0 to N . One integer value is missing.
//   Quickly determine and return the missing value.


const numsA = [3, 0, 1];
const expectedA = 2;

const numsB = [3, 0, 1, 2];
const expectedB = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

// pseudocode:
// sort from 0 to N
// compare index to the value until they don't match
// return the index where they don't match else return null

// console.log(missingValue(numsA)); // 2
// console.log(missingValue(numsB)); // null
// console.log(missingValue(numsC)); // -1
// console.log(missingValue(numsD)); // 6

// Function for determining missing value for a sequential list that starts at 0
function missingValue(unorderedNums) {
    var orderedNums = unorderedNums.sort();
    for(let i = 0; i<orderedNums.length; i++){

        if(orderedNums[i]!= i){
            return i;
        }
    }
    return null;
}

// Function for determining the missing value for a sequential list that starts with any non-negative number
function missingValueWithVariableStart(unorderedNums, start = 0) {
    var orderedNums = unorderedNums.sort();
    for(let i = 0; i<orderedNums.length; i++){

        if(orderedNums[i]!= start + i){
            return i;
        }
    }
    return null;
}

// function for determining the missing value for a sequential list that starts with any number, including negatives
function sortWithNegatives(unorderedNums){
    var nonnegative = [];
    var negative = [];
    // sort handles negative and non-negative numbers differently, so this block separates them into separate arrays
    for (let i=0; i< unorderedNums.length; i++){
        if (unorderedNums[i]< 0){
            negative += unorderedNums[i]
        }else {
            nonnegative += unorderedNums[i]
        }
    }
    nonnegative = nonnegative.sort();
    // negative numbers are sorted as if there wasn't a negative sign, so reverse puts them back in increasing order
    negative = negative.sort().reverse();
    // recombines the lists into a new, sorted list
    var reordered = negative + nonnegative;
    var start = reordered[0]
    missingValueWithVariableStart(reordered, start)
}

const numsC = [2, -4, 0, -3, -2, 1];
const expectedC = -1;


const numsCNeg = [-2, -3, -4]


const numsD = [5, 2, 7, 8, 4, 9, 3];
const expectedD = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */

