// Given an array of nums, return a count of the even and negative numbers
// function evenAndNegative (nums){
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] < 0 && nums[i]%2 ===0) count++
//     }
//     return count;
// }

// let nums = [0, -3, 2, -4, 8, -1, -10]
// console.log(evenAndNegative(nums))

// Amazon is dev a song select algo, used to sync a playlist with duration of a bus trip. Given a positive int (bus trip) and an array of positive int (song times). Find a pair of 2 songs such that the songs end 30 seconds before bus trip. If no pair, return [-1, -1]. Otherwise, return array with the indexes that match duration. If multiples, return the pair with the longest song. Order does matter

function busTrip(tripLength, songArray) {
    let returnArray = [];
    for (let i = 0; i < songArray.length; i++) {
        for (let j = i + 1; j < songArray.length; j++) {
            if ((songArray[i] + songArray[j]) - tripLength == -30) {
                if (returnArray.length === 0) {
                    returnArray.push(i, j)
                } else {
                    if (Math.abs(returnArray[0] - returnArray[1]) < Math.abs(songArray[i] - songArray[j])) {
                        returnArray = [i, j]
                    }
                }
            }
        }
    }
    if (returnArray.length == 0) returnArray.push(-1, -1)
    return returnArray
}

const trip1 = 530;
const list1 = [200, 250, 300, 400, 100, 300]
const list2 = [10, 20, 30, 40]

console.log(busTrip(trip1, list2))