var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
//cycle through the array
for(var i=0; i<numbers.length; i++){

//test which are positive 
    if(numbers[i] > 0){

//if they are positive, then add to countPositives total
        countPositives++;

    }

}

console.log("there are " + countPositives + " positive values");