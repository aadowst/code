// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);

// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);

// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

let array=["a", "b", "c", "d", "e"];
function reverse(arr){
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
    return(arr)
}

console.log(reverse(array));