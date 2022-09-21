/* 
Given by Riot games.
*/


//explanation in str1, there is a164 and a20, so these get combined to make a184, which goes in the front. b70 comes next, followed by c42 (the addition of c32 and c10)

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';

function rehash(s) {
const lettersObject = {}
let tempKey = ""
let tempNumberString = ""
    for(let i = 0; i < s.length ; i++){
        // check to see if at a letter
        if(isNaN(s[i])){
            // check to see if we've saved numbers in the number string
            if(tempNumberString !== ''){
                let tempNumber = parseInt(tempNumberString)
                const currentValue = lettersObject[tempKey] 
                lettersObject[tempKey] = currentValue + tempNumber
                tempNumberString = ""
            }
            if(!lettersObject.hasOwnProperty(s[i])){
                lettersObject[s[i]] = 0;
                tempKey = s[i]
            }else {
                tempKey = s[i]
            }
        } else {
            tempNumberString += s[i]
        }
    }
    if(tempNumberString !== ''){
        let tempNumber = parseInt(tempNumberString)
        const currentValue = lettersObject[tempKey] 
        lettersObject[tempKey] = currentValue + tempNumber
        tempNumberString = ""
    }
    let keysArray = Object.keys(lettersObject)
    const sortedKeys = keysArray.sort()
    let returnString = ""
    for (let j = 0; j < sortedKeys.length; j++){
        returnString += sortedKeys[j]
        returnString += lettersObject[sortedKeys[j]]
    }
    return returnString
}
