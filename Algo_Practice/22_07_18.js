/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

// pseudocode
// find a 1 and then initiate the counter
    // use a counter after the first one, which must return 6 or we return false
// repeat

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
console.log(socialDistancingEnforcer(queue2))
function socialDistancingEnforcer(queue) {
    let counter = 0;
    for (let i = 0; i< queue.length; i++){
        if(queue[i] == 1){
            for (let j= i+1; j <= i+7; j++){
                if(queue[j] == 0){
                    counter++;
                    console.log(counter);
                }else{
                    if(counter >=6){
                        counter = 0;
                        console.log("just resetted the counter");
                        break;
                    }else {
                        return false;
                    }
                }
                
            }
        }
    }
    return true;
}