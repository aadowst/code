// from: https://leetcode.com/problems/time-based-key-value-store

// Runtime: 742 ms, faster than 54.75% of JavaScript online submissions for Time Based Key-Value Store.
// Memory Usage: 99 MB, less than 59.31% of JavaScript online submissions for Time Based Key-Value Store.

class TimeMap {
	constructor(){
			this.dictionary = {}
	}
	
	set(key, value, timestamp){
			let valueArray = [value, timestamp]
			if(this.dictionary[key]){
					this.dictionary[key].push(valueArray)
			}else{
					this.dictionary[key] = [valueArray]
			}
			return
	}
	
	get(key, timestamp){
			if(!this.dictionary[key]) return ""
			let valuesArray = this.dictionary[key]
			for(let i = valuesArray.length-1; i >=0; i--){
					if(valuesArray[i][1] <= timestamp) return valuesArray[i][0]
			}
			return ""
	}
};