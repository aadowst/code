function partition(arr, left, right){
    if (left >= right) return;
    let i = left;
    let j = right;
    let pivot = Math.floor((left+right)/2)
    let pivotValue = arr[pivot];
    // console.log("pivot is", pivot)
    // console.log("pivotValue is", pivotValue)

    while (i!=j){
        // console.log(`i is ${i}`);
        // console.log(`arr[i] is ${arr[i]}`);
        // console.log(`j js ${j}`);
        // console.log(`arr[j] js ${arr[j]}`);
        if(arr[i]< pivotValue) {
            i++;
            // console.log(`i is now ${i} and j is still ${j}`);
        }else if(arr[j]> pivotValue) {
            j--;
            // console.log(`i is still ${i} and j is now ${j}`);


        }else{
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            // console.log(`swap ${arr[i]} and ${arr[j]}`);
            // console.log(arr)
        }
    }
    // console.log("returning " + j);
    return j;
}

function quicksort(arr, left=0, right = arr.length-1){

    //Run the partition function once to do first pass and get the pivot index
    let pivotIndexL = partition(arr, left, right)
    let pivotIndexR = pivotIndexL;

    //recursively call the partition function on both the sides of the pivot index (excluding the pivot index, itself)
    //the returned values are now called pivotIndexL and pivotIndexR and they
    while(pivotIndexL || pivotIndexR){
        pivotIndexL = partition(arr, left, pivotIndexL-1);
        // console.log(`pivotIndexL is ${pivotIndexL}`);
        // console.log(`pivotIndexR is ${pivotIndexR}`);
        pivotIndexR = partition(arr, pivotIndexR+1, right)
        // console.log(`pivotIndexL is ${pivotIndexL}`);
        // console.log(`pivotIndexR is ${pivotIndexR}`);
    }

    return;
}

let myArray = [1, 30, 15, 4, 20 ];
let myArray3 = [1, 30, 2, 7, 6, 3, 5, 20, 9, 15, 12, 10, 4 ];

let myArray2 = [25, 15, 20, 10, 5, 40];


quicksort(myArray3);
console.log(myArray3)