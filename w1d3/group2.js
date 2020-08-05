class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.head === null) {
            return null;
        } else {
            var firstNode = this.head;
            var secondNode = firstNode.next;
            this.head = secondNode;
            firstNode.next = null;
            this.size--;
            return firstNode;
        }
    }
    // Remove from back: remove and return the last node in the SLL
    removeFromBack() {
        if (this.head === null) { // No nodes
            return null;
        } else if (this.head.next === null) { // One node only
            let retr = this.head;
            this.head = null;
            this.size--;
            return retr;
        } else { // Two or more nodes
            let rover = this.head;
            while (rover.next.next !== null) {
                rover = rover.next;
            }
            // rover.next.next === null
            let retr = rover.next;
            rover.next = retr.next;
            retr.next = null;
            this.size--;
            return retr;
        }
    }
    // Size: return the total amount of nodes in the list. how can this be done without iterating?
    getSize() {
        // // If this.size were not declared, do the following below
        // if (this.head === null) { // Nothing to point to at start
        //     return 0;
        // } else {
        //     var numNodes = 1;
        //     var curNode = this.head; // Start with first node
        //     while (curNode.next != null) { // Loop while there are nodes to point to
        //         curNode = curNode.next; // Go to next node (if possible)
        //         numNodes++;
        //     }
        //     return numNodes;
        // }

        return this.size;
    }
    // Range: return the range of a integer linked list as a string. ex: "9-19"
    range() {
        if (this.isEmpty()) {
            return "-";
        }
        let rover = this.head;
        let max = rover.data, min = rover.data;
        while (rover.next !== null) {
            rover = rover.next;
            if (rover.data > max) {
                max = rover.data;
            }
            if (rover.data < min) {
                min = rover.data;
            }
        }
        return min + "-" + max;
    }

    // 1:   0           middle index is floor(1 / 2)

    // 3:   0 1 2       middle index is floor(3 / 2)

    // 5:   0 1 2 3 4   middle index is floor(5 / 2)

    // Return middle: return the middle node of a linked list, if there is one. if even, return null.
    returnMiddle() {
        if (this.size % 2 == 0) {
            return null;
        } else {
            var midIndex = Math.floor(this.size / 2);
            var curNode = this.head;
            var curIndex = 0;
            while (curIndex !== midIndex) {
                curNode = curNode.next;
                curIndex++;
            }

            return curNode; // curNode.data

            // Do we really want to just return ONE node?  But then we wind up breaking the list, if we set to null - so how to duplicate
            // the node WITHOUT breaking the list itself....

            // I'm just not sure if we also have to remove the middle node from the list.

            // Yeah, that's what I'm wondering too....
            // Thanks for pitching in, Ben!  We're the experts here, but I'm nothing like you - hahaha!

            // return the data as an alternate! -brendan
            // if we ever want just the data, we'll return it as is, without another node wrapping it

            // JUST the data value, or a duplicate of the node itself?
            // So like "return new Node(curNode.data)" (or similar)?

        }
    }

    returnMiddleData() {
        if (this.size % 2 == 0) {
            return null;
        } else {
            var midIndex = Math.floor(this.size / 2);
            var curNode = this.head;
            var curIndex = 0;
            while (curIndex !== midIndex) {
                curNode = curNode.next;
                curIndex++;
            }

            return curNode.data
        }
    }

    isEmpty(){
        return this.head === null;
    }

    contains(value){
         // start at the head
        var runner = this.head;

        // while we have a runner
        while(runner){

            // return true if data === value
            if(runner.data === value){
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            this.size++;
            return;
        };

        node.next = this.head;
        this.head = node;
        this.size++;
        return;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            this.size++;
            return
        }

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
                this.size++;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    // bonus
    recursiveContains(value, current){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(value, current.next);
    }

    addDataToFront(data){
        var node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.size++;
        return;
    }

    render() {
        if (this.head === null) {
            return "X";
        }
        let retr = this.head.data + ""
        let rover = this.head
        while (rover.next !== null) {
            rover = rover.next;
            retr = retr + " -> " + rover.data;
        }
        return retr + " -> X";
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


