// from:  https://leetcode.com/problems/min-stack/

/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

class MinStack {
	constructor(){
    this.items = []

	}

	push(item){
		this.items.push(item)
		this.sort(item)
		return this
	}

	sort(newItem){
		let newItemIdx = this.items.length -1
		while(newItemIdx > 0){
			if(newItem < this.items[newItemIdx -1]) return
			this.items[newItemIdx] = this.items[newItemIdx -1]
			this.items[newItemIdx -1 ] = newItem
			newItemIdx = newItemIdx - 1
		}
		return
	}

	pop(){
		this.items.pop()
		return this
	}

	top(){
		return this.items[this.items.length - 1]
	}

	getMin(){
		let temp = this.items[this.items.length - 1]
		this.pop()
		return temp;
	}

};

const myStack = new MinStack()
myStack.push(-3).push(0).push(-2).push(5).pop()
console.log(myStack.getMin())
console.log(myStack)
