// Queue
// FIFO (First in, first out)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(node) {
        if (this.front === null) {
            node.next = (node.prev = null);   // ensure next and prev point to null
            this.front = (this.rear = node);  // set front and rear to the node
        } else {
            node.next = null;
            node.prev = this.rear;
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (this.front === this.rear) {            // indicates there is only one element left
            let hold = this.front;
            this.front = (this.rear = null);       //   so set front and prev to null
            return hold;
        } else {                                   // at least one element left
            let hold = this.front;
            this.front = this.front.next;          // advance the head
            hold.next.prev = null;                 // HOLD   -> HEAD -> ....
                                                   //            /
                                                   //     X <---/
            hold.next = null;                      // HOLD -> X       X <- HEAD -> ...
            return hold;
        }
    }

    checkFront() {
        return (this.front === null) ? null : this.front.data;
    }

    isEmpty() {
        return this.front === null;
    }
}

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order

// use only one additional queue as storage
function readQueue(queue) {
    let auxQueue = new Queue();
    while (!queue.isEmpty()) {                   //     <|    <-    <A, B, C|
        let nextNode = queue.dequeue();          //
        auxQueue.enqueue(nextNode);              //      ...
        console.log(nextNode.data);
    }                                            //     <A, B, C|     <-   <|

    while (!auxQueue.isEmpty()) {                // ---     <A, B, C|         <|   <---
        queue.enqueue(auxQueue.dequeue());
    }                                            // ---     <|             <A, B, C|  <---
}
