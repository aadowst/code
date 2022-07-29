const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

// pseudocode:
// start with quarters
// give as many as possible (under the total)
// give one and compare to total of what's left to give
// continue until you would have given too many
// record the number of coins given (if 0, don't include)
// calculate what is left to give
// repeat with dimes, then nickels then pennies

function fewestCoinChange(cents) {
    let changeBack = 0;
    let output = {};
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    while(changeBack <= cents-25){
        quarter++;
        changeBack += 25;
        output["quarter"]= quarter
    }
    while(changeBack <= cents-10){
        dime++;
        changeBack += 10;
        output["dime"]= dime
    }
    while(changeBack <= cents-5){
        nickel++;
        changeBack += 5;
        output["nickel"]= nickel
    }
    while(changeBack <= cents-1){
        penny++;
        changeBack += 1;
        output["penny"]= penny
    }

    return output
}

// console.log(fewestCoinChange(cents1)) // { quarter: 1 }
// console.log(fewestCoinChange(cents2)) // { quarter: 2 }
// console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
// console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }

/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

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

function missingValue(unorderedNums) {
    var orderedNums = unorderedNums.sort();
    for(let i = 0; i<orderedNums.length; i++){

        if(orderedNums[i]!= i){
            return i;
        }
    }
    return null;
}


function missingValueWithVariableStart(unorderedNums, start = 0) {
    var orderedNums = unorderedNums.sort();
    for(let i = 0; i<orderedNums.length; i++){

        if(orderedNums[i]!= start + i){
            return i;
        }
    }
    return null;
}

function sortWithNegatives(unorderedNums){
    var nonnegative = [];
    var negative = [];
    for (let i=0; i< unorderedNums.length; i++){
        if (unorderedNums[i]< 0){
            negative += unorderedNums[i]
        }else {
            nonnegative += unorderedNums[i]
        }
    }
    nonnegative = nonnegative.sort();
    negative = negative.sort().reverse();
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

