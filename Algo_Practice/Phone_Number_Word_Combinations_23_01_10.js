// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/

// Runtime:  61 ms (beats 88.15%)
// Memory:  41.8 MB (beats 74.51%)
var letterCombinationsDFS = function(digits) {
	if(digits === "") return []
	let results = []
	const letterMappings = {
			2: ["a", "b", "c"],
			3: ["d", "e", "f"],
			4: ["g", "h", "i"],
			5: ["j", "k", "l"],
			6: ["m", "n", "o"],
			7: ["p", "q", "r", "s"],
			8: ["t", "u", "v"],
			9: ["w", "x", "y", "z"]
	}
	function generateLettersDFS(index, str = ""){
		if(index == digits.length) results.push(str)
			let letters = letterMappings[digits[index]]


			for(let letter of letters){
				generateLettersDFS(index + 1, str + letter)
			}
	}

	generateLettersDFS(0)

	return results
};


// Runtime:  68 ms (beats 69.10%)
// Memory Usage:  41.6 MB (beats 95.8%)

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if(digits === "") return []
	let results = [""]
	const letterMappings = {
			2: ["a", "b", "c"],
			3: ["d", "e", "f"],
			4: ["g", "h", "i"],
			5: ["j", "k", "l"],
			6: ["m", "n", "o"],
			7: ["p", "q", "r", "s"],
			8: ["t", "u", "v"],
			9: ["w", "x", "y", "z"]
	}
	function generateLetters(index){
			let letters = letterMappings[digits[index]]
			let prefixes = [...results]
			results = []

			for(let letter of letters){
					for(let prefix of prefixes){
							const newCombination = prefix + letter
							results.push(newCombination)

					}
			}
	}

	for(let i = 0; i < digits.length; i++){
			generateLetters(i)
	}

	return results
};