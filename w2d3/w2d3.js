class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// first in, last out
class slStack {
    constructor() {
        this.head = null;
    }

    // add to top (add new head)
    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // remove from top, (remove head)
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    // aka top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }
}

// first in, first out
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // queue: isPalindrome
    // return true or false if the queue is a palindrome: a string that is equal to itself when reversed

    // racecar

    // 112211

    // queue = (1)->(2)->(3)->(2)->(1)->
    // return true

    // queue = (1)->(3)->(4)->(40)->
    // return false

    // you may not linearly iterate through your queue
    // return the queue back to it's original order

    // you may use stacks or queues as additional storage, or even arrays
    // you may create helper methods to break this challenge down into smaller parts

    isPalindrome(){
        var isPalindrome = true;
        var stack = new Stack();
        var len = this.length(); // we need a fixed length because we will push
                                 // back into the same queue.

        for(var i = 0; i < len; i++){
            var node = this.dequeue();
            stack.push(new Node(node.data));
            this.enqueue(node);
        }

        for(var i = 0; i < len; i++){
            var dequeued = this.dequeue();
            var popped = stack.pop();

            if(popped.data !== dequeued.data){
                isPalindrome = false;
            }

            // circular queue
            this.enqueue(dequeued);
        }
        return isPalindrome;
    }

    length(){
        var tempQueue = new Queue();
        var count = 0;

        while(!this.isEmpty()){
            var tempNode = this.dequeue();
            count++;
            tempQueue.enqueue(tempNode);
        }

        while(!tempQueue.isEmpty()){
            this.enqueue(tempQueue.dequeue());
        }

        return count;
    }

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue(){
        if(this.front === null){
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }

    checkFront(){
        //     if this is truthy, do the first one, else do the second
        return this.front ? this.front.data : null;
    }

    isEmpty(){
        return this.front === null;
    }
}

function countStack(stack){
    let newStack = new slStack();
    let count = 0;

    while(!stack.isEmpty()){
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while(!newStack.isEmpty()){
        stack.push(newStack.pop());
    }

    return count;
};

function readQueue(queue){
    var tempQueue = new Queue();

    while(!queue.isEmpty()){
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while(!tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
};



