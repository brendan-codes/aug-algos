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

    // using only one extra stack for storage, check if this stack is sorted
    // return the stack back to it's original order when you are done
    // assume node.data are integers
    isSorted() {
        var stack2 = new Stack();
        var sorted = true;

        while (!this.isEmpty()) {
            var temp = this.pop();
            if (stack2.isEmpty() || stack2.peek().data <= temp.data) {
                stack2.push(temp);
            } else {
                sorted = false;
                stack2.push(temp);
                break;
            }
        }

        while (!stack2.isEmpty()) {
            this.push(stack2.pop());
        }
        return sorted;
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

    // reverse a queue using only one stack as additional storage
    reverseQueue() {
        var stack = new Stack();

        while (!this.isEmpty()) {
            stack.push(this.dequeue());
        };

        while (!stack.isEmpty()) {
            this.enqueue(stack.pop());
        };

        return this;
    }

    isPalindrome() {
        var isPalindrome = true;
        var stack = new Stack();
        var len = this.length(); // we need a fixed length because we will push
        // back into the same queue.

        for (var i = 0; i < len; i++) {
            var node = this.dequeue();
            stack.push(new Node(node.data));
            this.enqueue(node);
        }

        for (var i = 0; i < len; i++) {
            var dequeued = this.dequeue();
            var popped = stack.pop();

            if (popped.data !== dequeued.data) {
                isPalindrome = false;
            }

            // circular queue
            this.enqueue(dequeued);
        }
        return isPalindrome;
    }

    length() {
        var tempQueue = new Queue();
        var count = 0;

        while (!this.isEmpty()) {
            var tempNode = this.dequeue();
            count++;
            tempQueue.enqueue(tempNode);
        }

        while (!tempQueue.isEmpty()) {
            this.enqueue(tempQueue.dequeue());
        }

        return count;
    }

    enqueue(node) {
        if (this.rear === null) {
            this.rear = node;
            this.front = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (this.front === null) {
            return null;
        };
        if (this.front === this.rear) {
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }

    checkFront() {
        //     if this is truthy, do the first one, else do the second
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }
}

function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
};

function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
};


// bonus

// given two queues, return the one with the greater sum.
// return the queues to their original order
function greaterOfTwoQueues(queue1, queue2) {
    return sumQueue(queue1) >= sumQueue(queue2) ? queue1 : queue2;
}

function sumQueue(queue) {
    let newQueue = queue;
    let sum = 0;

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        sum += node.data;
        newQueue.enqueue(node);
    }

    while (!newQueue.isEmpty) {
        queue.enqueue(newQueue.dequeue());
    }

    return sum;
}


