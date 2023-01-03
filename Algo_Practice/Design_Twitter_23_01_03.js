// https://leetcode.com/problems/design-twitter/

// Runtime:  90 ms (beats 43.42%)
// Memory Usage:  42.1 MB (beats 60.53%)

var Twitter = function() {
	this.tweets = []
	this.follows = {}
};

/** 
* @param {number} userId 
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function(userId, tweetId) {
	this.tweets.push({user:  userId, tweet: tweetId})

};

/** 
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function(userId) {
	const newsFeed = []
	const userFollows = this.follows[userId]
	for(let i = this.tweets.length - 1; i >= 0; i--){
			const tweet = this.tweets[i]
			if(tweet.user === userId) newsFeed.push([tweet.tweet])
			else if(userFollows?.has(tweet.user)) newsFeed.push([tweet.tweet])
			if(newsFeed.length >= 10) return newsFeed
	}
	return newsFeed
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function(followerId, followeeId) {
	if(!this.follows[followerId]) {
			this.follows[followerId] = new Set()
			}
	var userFollows = this.follows[followerId]
	userFollows.add(followeeId)
	this.follows[followerId] = userFollows
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function(followerId, followeeId) {
	var userFollows = this.follows[followerId]
	if(userFollows?.has(followeeId)) userFollows.delete(followeeId)
	this.follows[followerId] = userFollows
};

/** 
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/