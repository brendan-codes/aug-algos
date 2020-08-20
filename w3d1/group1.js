// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        node.prev = (node.next = null);
        if (this.head === null) {
            this.head = (this.tail = node);
        } else {
            node.next = this.head;     //   node ]-----> HEAD
            this.head.prev = node;     //   node <-----[ HEAD
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        let hold;
        if (this.head === this.tail) {      // Ideally, indicates that the list has no more than 1 item
            hold = this.head;
            this.head = (this.tail = null);
            if (hold !== null) {           // Ideally indicates that the list had an item
                this.length--;             //    so it makes sense to decrement the length in this case
            }
        } else {
            hold = this.tail;
            this.tail = this.tail.prev;

            this.tail.next = null;        // TAIL ]------> X       hold
            hold.prev = null;             // TAIL   X <--------[ hold
            this.length--;
        }
        return hold;
    }

    // add node before target if target exists
    // target is a node data
    // --- what if the target does NOT exist?
    //   - for now will do nothing in this scenario
    prepend(target, node) {
        node.prev = (node.next = null);
        if (!this.isEmpty()) {
            if (this.head.data === target) {
                node.next = this.head;             //  node ]----> HEAD
                this.head.prev = node;             //  node <----[ HEAD

                this.head = node;
                this.length++;
            } else {
                let rover = this.head;
                while (rover !== null && rover.data !== target) {
                    rover = rover.next;
                }
                if (rover !== null) {
                    let beforeRover = rover.prev;
                    beforeRover.next = node;       // BEFORE ]------> node       ROVER
                    node.prev = beforeRover;       // BEFORE <------[ node       ROVER

                    node.next = rover;             // BEFORE          node ]----> ROVER
                    rover.prev = node;             // BEFORE          node <----[ ROVER
                    this.length++;
                }
            }
        }
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        node.prev = (node.next = null);
        if (this.head === null) {
            this.head = (this.tail = node);
        } else {
            this.tail.next = node;        // TAIL ]-----> node
            node.prev = this.tail;        // TAIL <-----[ node
            this.tail = this.tail.next;
        }
        this.length++;
    }

    // add after target if exists
    append(target, node) {
        node.prev = (node.next = null);
        if (!this.isEmpty()) {
            if (this.tail.data === target) {
                this.tail.next = node;     // TAIL ]-----> node
                node.prev = this.tail;     // TAIL <-----[ node

                this.tail = this.tail.next;
                this.length++;
            } else {
                let rover = this.tail;
                while (rover !== null && rover.data !== target) {
                    rover = rover.prev;
                }
                if (rover !== null) {
                    let afterRover = rover.next;

                    node.next = afterRover; // ROVER       node ]---> AFTER
                    afterRover.prev = node; // ROVER       node <---[ AFTER

                    rover.next = node;      // ROVER ]---> node       AFTER
                    node.prev = rover;      // ROVER <---[ node       AFTER
                    this.length++;
                }
            }
        }
    }

    // pop from head
    removeHead() {
        let hold;
        if (this.head === this.tail) {
            hold = this.head;
            this.head = (this.tail = null);
            if (hold !== null) {
                this.length--;
            }
        } else {
            hold = this.head;
            this.head = this.head.next;

            hold.next = null;
            this.head.prev = null;
            this.length--;
        }
        return hold;
    }
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}