function alwaysHungry(arr) {
    var foodCount = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i]=="food"){
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount ==0){
        console.log("I'm hungry")
    }
}
    
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"

// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (let i = 0; i < arr.length; i++){
        if (arr[i]> cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let i=0; i< arr.length; i++){
        sum += arr[i];
    }
    var average = sum/arr.length;
    var count = 0
    // count how many values are greated than the average
    for (let i = 0; i < arr.length; i++){
        if (arr[i]> average){
            count++;
        }
    }
    return count;
}
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

function reverse(arr) {
    var start = 0;
    var end = arr.length -1;
    var temp;
    while (start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end]= temp;
        start++;
        end--;
    }
    return arr;
}
    



function reverse2(arr){
    for (let i=0; i< (arr.length/2); i++){
        var temp = arr[i];
        console.log("temp is " + temp);
        arr[i]=arr[(arr.length-(1+i))];
        console.log("arr[" + i + "] is " + arr[i]);
        arr[(arr.length-(1+i))] = temp;
        console.log("arr.length-(1+" + i + ") is " + arr[(arr.length-(1+i))]);
    }
    console.log(arr);
    return arr;
}

// var result = reverse2(["a", "b", "c", "d", "e"]);
// console.log(result); 
// we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i = 2; fibArr.length < n; i++ ){
        let temp = fibArr[i-2] + fibArr[i-1];
        fibArr.push(temp);

    }
    return fibArr;
}
    
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
