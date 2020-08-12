// Queue
// FIFO (First in, first out)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // Always points to the first node
        this.rear = null; // Always points to the last node
    }

    enqueue(node) {
        if (this.isEmpty()) { // No nodes, so the front and rear are pointing to same node
            this.front = node;
            this.rear = node;
        } else { // At least one node already in queue
            var lastNode = this.rear; // Get last node
            // point lastNode.next to new node
            lastNode.next = node; // Now point it to the new node
            // point this.rear to new node
            this.rear = node; // Make rear point to new node
        }
    }

    dequeue() {
        if (!this.isEmpty()) { // Only if not empty - nothing to do if empty
            var firstNode = this.front;
            if (firstNode.next == null) { // If there is only one node
                this.rear = null; // Ensure this.rear points to null
            }
            this.front = firstNode.next; // Have front point to next point (or null if there's only one node)
            firstNode.next = null; // Break pointer from original first node
            return firstNode;
        }
    }

    checkFront() {
        return this.front; // If it's empty - returns null, otherwise it returns the first node
    }

    isEmpty(){
        return (this.front == null && this.rear == null)
    }
}

// using only public queue interfaces,
// print all the values of the queue and return
// the queue as it's original order


// S: [ 1, 2, 3 ]
// Q: [ ]

// use only one additional queue as storage
function readQueue(queue){
    var storage = new Queue();
    while (!queue.isEmpty()) { // While there are nodes to check
        let currNode = queue.dequeue();
        console.log(currNode.data);
        storage.enqueue(currNode);
    }

    // we point original Q front/rear to storage
    queue.front = storage.front
    queue.rear = storage.rear
}


var myQ = new Queue();
myQ.enqueue(new Node(10));
myQ.enqueue(new Node(13));
myQ.enqueue(new Node(16));
myQ.enqueue(new Node(21));
console.log(myQ.checkFront());

readQueue(myQ);

console.log(myQ);

myQ.dequeue()
myQ.dequeue()
myQ.dequeue()
myQ.dequeue()
myQ.dequeue()
myQ.dequeue()



