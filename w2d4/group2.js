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
        if (this.isEmpty()) {
            return true;   // empty stacks are inherently sorted
        }
        let auxStack = new slStack();
        // |A, B>     |>

        let foundOutOfOrder = false;
        while (!this.isEmpty() && !foundOutOfOrder) {
            let bData = this.peek();          // extract B and push it to the aux stack
            this.pop();
            auxStack.push(new Node(bData));

            if (!this.isEmpty()) {           // if A can be extracted
                let aData = this.peek();
                foundOutOfOrder = foundOutOfOrder || (aData > bData);    // check if A <= B, foundOutOfOrder will become and remain true the moment aData > bData becomes true
            }
        }
        // |...>       |B, A>
        while (!auxStack.isEmpty()) {                   // transfer all the contents of auxStack back to this stack
            this.push(new Node(auxStack.peek()));
            auxStack.pop();
        }

        //  |A, B>      |>
        return !foundOutOfOrder;
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

    reverseQueue() {

        let auxStack = new slStack();
        // >A, B>    |>              // elements emerge from the queue in this order:    B, A

        while (!this.isEmpty()) {
            auxStack.push(new Node(this.checkFront()));
            this.dequeue();
        }

        // >>       |B, A> //   elements will emerge from the stack in this order:   A, B
        //                        extracting each element from the stack and putting them into the queue
        //                        should result in the queue being    >B, A>

        while (!auxStack.isEmpty()) {
            this.enqueue(new Node(auxStack.peek()));
            auxStack.pop();
        }

        //   >B, A>   |>
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
    let auxStack1 = new slStack(), auxStack2 = new slStack();

    //   >A, B>      >C, D>      |>    |>

    // tranfer the contents of queue1 and queue2 into their respective stacks
    //    track the sum of the elements in each queue while doing so.
    let queue1Sum = 0, queue2Sum = 0;
    while (!queue1.isEmpty()) {
        auxStack1.push(new Node(queue1.checkFront()));
        queue1Sum += queue1.checkFront();
        queue1.dequeue();
    }

    while (!queue2.isEmpty()) {
        auxStack2.push(new Node(queue2.checkFront()));
        queue2Sum += queue2.checkFront();
        queue2.dequeue();
    }

    // sums obtained, now have to restore order of elements in queue

    // >>           >>           |B, A>    |D, C>

    while (!auxStack1.isEmpty()) {
        queue1.enqueue(new Node(auxStack1.peek()));
        auxStack1.pop();
    }

    while (!auxStack2.isEmpty()) {
        queue2.enqueue(new Node(auxStack2.peek()));
        auxStack2.pop();
    }

    queue1.reverseQueue();
    queue2.reverseQueue();

    //    >A, B>     >C, D>    |>          |>
    return (queue1Sum >= queue2Sum) ? queue1 : queue2;
}

