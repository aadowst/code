// From https://leetcode.com/problems/valid-palindrome/
// Runtime: 71 ms(faster than 97.12%)
// Memory Usage: 47.1 MB (less than 34.94%)

//wasn't faster than isAlphanumeric function below
function isAlphanumericRegex(char) {
	return (/[a-zA-Z0-9]/).test(char)
}


function isAlphanumeric(char) {
	const isNumber = char.charCodeAt() >= 48 && char.charCodeAt() <=57;
	const isLetter = char.charCodeAt() >= 97 && char.charCodeAt() <=122;
	return isNumber || isLetter
}

var isPalindromeRevised = function(string){
	let leftPointer = 0
	let rightPointer = string.length -1
	while(leftPointer < rightPointer){
		const leftCharacter = (string[leftPointer].toLowerCase())
		const rightCharacter = (string[rightPointer].toLowerCase())
		if(!isAlphanumeric(leftCharacter)) leftPointer++
		else if (!isAlphanumeric(rightCharacter)) rightPointer--
		else{
			if(leftCharacter !== rightCharacter) return false
			leftPointer++
			rightPointer--
		}
	}
	return true
}

// Runtime: 144 ms(faster than 20.62%)
// Memory Usage: 48.3 MB (less than 26.20%)

// Numbers and punctuation don't have an upper and lower case, so they won't be changed by the methods, thus returning false
function isCharacterALetter(character) {
	return character.toLowerCase() != character.toUpperCase()
}

var isPalindromeOriginal = function(string) {
    let leftPointer = 0
		let rightPointer = string.length -1
		while(leftPointer <= rightPointer){
			const leftCharacter = string[leftPointer]
			const isLeftCharacterAlphanumeric = isCharacterALetter(leftCharacter) || Number.isInteger(parseInt(leftCharacter))
			const rightCharacter = string[rightPointer]
			const isRightCharacterAlphanumeric = isCharacterALetter(rightCharacter) || Number.isInteger(parseInt(rightCharacter))

			if(isLeftCharacterAlphanumeric && isRightCharacterAlphanumeric){
				if(leftCharacter.toLowerCase() !== rightCharacter.toLowerCase()) return false
				leftPointer++
				rightPointer--
			}else{
				if(!isLeftCharacterAlphanumeric) leftPointer++
				if(!isRightCharacterAlphanumeric) rightPointer--
			}

		}
		return true
};

console.log(isPalindromeRevisedAgain("race a car"))