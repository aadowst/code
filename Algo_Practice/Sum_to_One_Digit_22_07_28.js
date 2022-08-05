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

