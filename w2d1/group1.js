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
        // link newnode to the front
        newNode.next = this.head;

        // link the head to new node which is at the front
        this.head = newNode;
    }

    // remove from top, (remove head)
    pop() {
        // set headnode as variable
        var headNode = this.head;

        // set head to .next
        this.head = this.head.next;

        // point headnode to null
        headNode.next = null;

        // return headnode var
        return headNode;
    }

    // aka top
    peek() {
        // if SLL is empty
        if (!this.isEmpty()) {
            return this.head.data;
        } else {
            return null;
        }
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    countStack() {
        // initialize stack to store popped items
        var storage = new slStack();
        // iterate through slStack and pop each item into storage while counting each time
        var counter = 0;
        while (this.head) { // --> changed this from this --> this.head; works now
            storage.push(this.pop());
            counter++;
        }
        // repopulate the original slStack by pushing items in storage
        while (storage.head) {
            this.push(storage.pop())
        }
        return counter
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack){}

var myFirstSLL = new slStack();
myFirstSLL.push(new Node(10));
myFirstSLL.push(new Node(13));
myFirstSLL.push(new Node(16));
myFirstSLL.push(new Node(21));

console.log(myFirstSLL.countStack())

console.log(myFirstSLL);