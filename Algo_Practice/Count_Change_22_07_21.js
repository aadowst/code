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