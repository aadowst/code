//Currying is the idea that you only run part of a function, rather than the whole thing.



//Example: Uncurried
function ninjaBelt(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
}
ninjaBelt('Eileen', 'black');

//Example: Curried
function ninjaBelt(ninja){
  return function belt(beltColor){ //note the closure here!
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
    }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.