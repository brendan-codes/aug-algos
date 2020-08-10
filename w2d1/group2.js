// Stacks

// First in, first out

// A stack is a LIFO data structure
// LAST IN, FIRST OUT

// think of a stack of paper

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class arrStack {
    constructor(items){
        if(!items) items = [];
        this.items = items;
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

class slStack {
    constructor() {
        this.head = null;
    }

    // add to top (add new head)
    push(newNode) {
        if (newNode !== null) {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // remove from top, (remove head)
    pop() {
        if (this.head !== null) { // If at least one node
            let hold = this.head;
            this.head = this.head.next;
            hold.next = null;
        }
    }

    // aka top
    peek() {
        if (this.head !== null) { // If there is data (i.e. not empty)
            return this.head.data; // Return that value
        } else {
            return null;
        }
    }

    // check if empty
    isEmpty() {
        return this.head === null; // If true, no data; otherwise there is data (i.e. not null), so return false
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    let auxStack = new slStack(); // Temporary stack
    let count = 0;
    while (!stack.isEmpty()) { // Push onto new stack
        auxStack.push(new Node(stack.peek()));
        stack.pop();
        count++;
    }
    while (!auxStack.isEmpty()) { // Put back into original stack - keeping its original order
        stack.push(new Node(auxStack.peek()));
        auxStack.pop();
    }
    return count;
}

function countStackV2(stack) {
    if (stack.isEmpty()) {
        return 0;
    }
    let hold = stack.peek();
    stack.pop();
    let sub = countStackV2(stack); // Recursively move down stack
    stack.push(new Node(hold));
    return 1 + sub;
}