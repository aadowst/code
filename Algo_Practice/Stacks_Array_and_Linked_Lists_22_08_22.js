/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
 class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
      this.items = [];
    }
  
    /**
     * TODO: implement this method
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items.push(item);
        return this.size();
    }
  
    /**
     * TODO: implement this method
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        // if this.isEmpty() return null;
        return this.items.pop();
    }
  
    /**
     * TODO: implement this method
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return this.items[this.size()-1];
    }
  
    /**
     * TODO: implement this method
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.size() == 0;
    }
  
    /**
     * TODO: implement this method
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
  }
  
// const myStack = new Stack
// myStack.push(4)
// myStack.push(5)
// myStack.push(6)
// console.log(myStack.peek())


  class StackNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedListStack {
    constructor() {
      this.head = null;
    }
  
    /**
     * TODO: implement this method
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
     push(item) {
        const newNode = new StackNode(item);
        if(this.isEmpty()){
            this.head = newNode;
            return this.size();
        }
        newNode.next = this.head;
        this.head = newNode;
        return this.size();
     }
  
     /**
      * TODO: implement this method
      * Removes the top / last item from this stack.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {any} The removed item or undefined if this stack was empty.
      */
     pop() {
        let data = this.head.data;
        this.head = this.head.next;
        return data;
     }
   
     /**
      * TODO: implement this method
      * Retrieves the top / last item from this stack without removing it.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {any} The top / last item of this stack.
      */
     peek() {
        if (!this.isEmpty()){
            return this.head.data;
        }
     }
   
     /**
      * TODO: implement this method
      * Returns whether or not this stack is empty.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {boolean}
      */
     isEmpty() {
        return this.head == null;
     }
   
     /**
      * TODO: implement this method
      * Returns the size of this stack.
      * - Time: O(1) constant.
      * - Space: O(1) constant.
      * @returns {number} The length.
      */
     size() {
        if (this.isEmpty()) return 0;
        let runner = this.head;
        let count = 1;

        while (runner.next != null){
            count++;
            runner = runner.next;

        }
        return count;
     }
  }

const myLinkedListStack = new LinkedListStack;
console.log(myLinkedListStack.peek());

myLinkedListStack.push(4)
myLinkedListStack.push(5)
myLinkedListStack.push(6)
console.log(myLinkedListStack.peek());