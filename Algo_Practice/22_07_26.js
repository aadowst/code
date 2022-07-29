// Return the fibonacci number at the nth position, recursively.
  
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding up the two numbers before it,
// starting with 0 and 1 as the first two numbers of the sequence.
// */

const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;

function fibonacci(num, fib=[0,1], sum=1) {
    var fib = fib
    if (fib.length < num){
        lastValue = (fib[fib.length -1]+fib[fib.length -2])
        fib.push(lastValue)
        sum += lastValue
        return fibonacci(num, fib, sum)
    }else{
        console.log(fib)
        return sum
    }
}

console.log(fibonacci(6))


