// Original Function 
Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

// Revised Function
Number.prototype.isPrimeRevised = function() {
    for( let i=2; i<Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrimeRevised() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


// Which implementation of Fibonacci should be faster?

// const {performance } = require('perf_hooks');
// const start = performance.now();
// iFib(20)
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// recursive (loser! 2.573 ms)
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}


// iterative (WINNER! 0.086 ms)
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}

// Can we reverse a string more efficiently?

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";


const {performance } = require('perf_hooks');
const start = performance.now();
reversedOriginal(story);
console.log(`This took ${performance.now() - start} milliseconds to run`);

function reversedOriginal(text){ //0.129 ms to run
    text.split("").reverse().join("");
}

function reverseRevised (text){ //0.107 ms to run
    let reverseArray = []
    for(let i = text.length -1; i >=0; i--){
        reverseArray.push(text[i]);
    }
    return reverseArray.join("");

}

function reverseRevised2 (text){ //0.079 ms to run
    let reversedString = "";
    for(let i = text.length -1; i >=0; i--){
        reversedString =+ text[i];
    }
    return reversedString;

}
