// Stacks

// First in, first out

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// think of a stack of paper



class arrStack {
    constructor(){
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0){
            return true;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

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

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
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








































































































































































































































































































































































































































































































































