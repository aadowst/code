// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property


function isPresent2d(arr2d, value){

    for (let i=0; i < arr2d.length; i++){

        for (let j=0; j < arr2d[i].length; j++){
            
            if (arr2d[i][j] == value ){
                return true;
            // console.log(arr2d[i][j]);
        }
        }

    }
}

var arr2d = [[2, 5, 8],
            [3, 6, 1],
            [5, 7, 7]];

isPresent2d(arr2d, 7);

// console.log(arr2d[0][1]);