function partition(arr, left, right){
    if (left >= right) return;
    let i = left;
    let j = right;
    let pivot = Math.floor((left+right)/2)
    let pivotValue = arr[pivot];


    while (i<j){
        if(arr[i]< pivotValue) {
            i++;

        }else if(arr[j]> pivotValue) {
            j--;



        }else{
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    console.log(arr)
    return j;
}

const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
partition(nums2, 0, 8);
// console.log(nums2);

function quicksort(arr, left=0, right = arr.length-1){

    //Run the partition function once to do first pass and get the pivot index
    let pivotIndexL = partition(arr, left, right)
    let pivotIndexR = pivotIndexL;

    //recursively call the partition function on both the sides of the pivot index (excluding the pivot index, itself)
    //the returned values are now called pivotIndexL and pivotIndexR, respectively
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


// quicksort(myArray3);
// console.log(myArray3)