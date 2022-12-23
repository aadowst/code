// https://leetcode.com/problems/implement-trie-prefix-tree/

// Runtime:  209 ms (beats 87.59%)
// Memory Usage:  57.9 MB (beats 83.83%)

var Trie = function() {
	this.root = {}
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
	let node = this.root;
	for(const char of word){
			if(!node[char]) node[char] = {}
	node = node[char]
	}
	node.endOfWord = true
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
	let node = this.root
	for(const char of word) {
			if(!node[char] )return false
			node = node[char]
	}
	return node.endOfWord? true : false
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
	let node = this.root
	for(const char of prefix) {
			if(!node[char] )return false
			node = node[char]
	}
	return true
};