const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 4, 1, 5, 4];
const expected6 = [];
//  - order doesn't matter
// pseudocode
// go through the array
// check to see if value is in newArray
// if no, add it
// if yes, increment it
// figure out how many key-value pairs there are

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
console.log("and the result is:",mode(nums1))
function mode(nums) {
    var count = {};
    // check to see if the entry in nums is already in count. If yes, increment it. If no, add it.
    for(let i = 0; i<nums.length; i++){
        if(nums[i] in count){
            let temp = count[nums[i]];
            count[nums[i]] += 1;
        }else{
            count[nums[i]]=1;
        }
    }
    // create a new array called keyValueList, which stores the which numbers showed up in the original array (the keys) and the count of each (the values)
    let keyValueList = Object.entries(count)

    let max = 0;
    let maxKey = []
    console.log(keyValueList)
    for(const[key,value] of keyValueList){
        if (value >= max){
            max = value;
        }
    }
    for(const[key,value] of keyValueList){
        if (value == max){
            maxKey.push(key);
        }
    }
    if(max * keyValueList.length == nums.length && keyValueList.length >1){
        return [];
    }else{
        return maxKey;
    }
}