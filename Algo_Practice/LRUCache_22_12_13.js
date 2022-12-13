// https://leetcode.com/problems/lru-cache/

// Comment:  Map objects are like arrays, becuase key-value pairs are added at the end. In this solution, when key-value pairs are to be modified, the original key is deleted and an identical key is created (with the value), putting it at the end. Therefore, the first element can be removed from the Map, if it is too big

class LRUCacheMap{
	constructor(capacity){
		this.cache = new Map()
		this.capacity = capacity
	}

	get(key){
		if(!this.cache.has(key)) return -1
		const value = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, value)
		return value
		}

	put(key, value){
		if(this.cache.has(key)){
			this.cache.delete(key)
		}
		this.cache.set(key, value)
		if(this.cache.size > this.cache.capacity){
			//Least recently used element is at the beginning, so it will be the first element returned when .next() is called on the .keys() iterator
			leastRecentKey = this.cache.keys().next().value
			this.cache.delete(leastRecentKey)
		}
	}
}


// comment: added a rank property to each value, so the lowest rank (least used would be deleted)
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = {};
  this.rank = 0;
};

LRUCache.prototype.evict = function () {
  for (let [key, value] of Object.entries(this.cache)) {
    if (value.rank < this.rank - this.capacity) {
      delete this.cache[key];
      this.size--;
      return;
    }
  }
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    this.cache[key].rank = this.rank++;
    return this.cache[key].value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.cache[key].value = value;
    this.cache[key].rank = this.rank++;
    return;
  }
  let rank = this.rank++;
  this.cache[key] = { value, rank };;
  this.size++;
  if (this.size > this.capacity) {
    this.evict();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
