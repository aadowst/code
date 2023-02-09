// https://leetcode.com/problems/word-break/


// Runtime:  67 ms (beats 86.30%)
// Memory:  43.7 MB (beats 56.7%)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

	wordDict.sort((a,b) => b.length - a.length)
	const visited = new Set()
	let output = false

	dfs(0)

	function dfs(i){
			if(visited.has(i)) return
			visited.add(i)
			if(output == true) return
			if(i > s.length) return
			if(i === s.length){
					output = true
					return
			} 
			const wordsAtIndex = findWordAtIndex(i)
			for(const word of wordsAtIndex){
					dfs(i + word.length)
			}
	}

	function findWordAtIndex(i){
			if(output == true) return
			const wordsAtIndex = []
			for(const word of wordDict){
					if(s.indexOf(word, i) == i) wordsAtIndex.push(word) 
			}
			return wordsAtIndex
	}
	return output
};