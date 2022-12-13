// https://leetcode.com/problems/lru-cache/

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
