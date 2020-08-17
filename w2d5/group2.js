// design a new queue class that holds two queues

// every third dequeued node gets enqueued into the 'next' queue

// think of a security queue where every third person is sent
// to an additional security check.

// the nextQueue should implement
// .front
// .rear
// .length
// .nextQueue, where .nextQueue is a regular Queue class

class nextQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
        this.nextQueue = new Queue();

        this.dequeueState = 1;
    }

    enqueue(node) {
        node.next = null;
        if (this.rear === null) {
            this.front = (this.rear = node);
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;
    }

    dequeue() {
        if (!this.isEmpty()) {
            if (this.dequeueState === 0) {
                this.nextQueue.enqueue(new Node(this.checkFront()));
            }

            if (this.front === this.rear) {
                this.front = (this.rear = null);
            } else {
                let hold = this.front;
                this.front = this.front.next;
                hold.next = null;
            }

            this.dequeueState = (this.dequeueState + 1) % 3;
            this.length--;
        }
    }

    checkFront(){
        return this.front === null ? null : this.front.data;
    }

    isEmpty() {
        return this.rear === null;
    }
}
// bonus: sumNextQueue
// given a nextQueue, dequeue all the nodes and sum the total of .nextQueue

// you do not have to return the queue to it's original order
// bonus bonus: return the queue to it's original order

// 10->20->30->10->10->20->30->20->30->10->
//  1  3    2  1   3   2   1   3    2   1

// .nextQueue
// 20->10->20->

// return 50
function sumNextQueue(nextQueue) {  // bugs seem fixed
let auxQueue = new Queue();
    let auxNextQueue = new Queue();
    const holdDeqState = nextQueue.dequeueState;   // for restoring the dequeueState after all this stuff is done
    //  (>A, B> ,  >C, D>, ?)     >>    >>
    let nqLength = 0;
    while (!nextQueue.nextQueue.isEmpty()) {
        auxNextQueue.enqueue(new Node(nextQueue.nextQueue.checkFront()));
        nqLength++;
        nextQueue.nextQueue.dequeue();
    }

    // (>A, B> , >>, ?)   >>    >C, D>

    for (let i = 0; i < nqLength; i++) {
        let holdData = auxNextQueue.checkFront();
        nextQueue.nextQueue.enqueue(new Node(holdData));
        auxNextQueue.dequeue();
        auxNextQueue.enqueue(new Node(holdData));
    }

    // (>A, B>,   >C, D>, ?)      >>    >C, D>

    while (!nextQueue.isEmpty()) {
        auxQueue.enqueue(new Node(nextQueue.checkFront()));
        nextQueue.dequeue();
    }

    // (>>,  >? ?>, ?)     >A, B>    >C, D>

    let sum = 0;
    while (!nextQueue.nextQueue.isEmpty()) {
        sum += nextQueue.nextQueue.checkFront();
        nextQueue.nextQueue.dequeue();
    }

    // (>> >>, ?)    >A, B>   >C, D>

    while (!auxQueue.isEmpty()) {
        nextQueue.enqueue(new Node(auxQueue.checkFront()));
        auxQueue.dequeue();
    }

    // (>A, B> >>, ?)  >>     >C, D>

    while (!auxNextQueue.isEmpty()) {
        nextQueue.nextQueue.enqueue(new Node(auxNextQueue.checkFront()));
        auxNextQueue.dequeue();
    }

    // (>A, B>,   >C, D>, ?)   >>    >>

    nextQueue.dequeueState = holdDeqState;    // restore dequeueState

    return sum;
}


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


