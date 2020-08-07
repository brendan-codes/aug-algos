class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    delete(val){
        var node = this.head;
        if (node.data === val) {
            console.log("current:", node);
            console.log("next:", node.next);
            let toDelete = node;
            this.head = node.next;
            console.log("toDelete:", toDelete);
            toDelete.next = null;
            console.log("head:", this.head)
            this.length -= 1;
            return;
        }
        //     7
        while(node) {
            console.log("current:", node);
            console.log("next:", node.next);
            //
            if(node.next) {
                if(node.next.data === val) {
                    let toDelete = node.next; // set next node as variable
                    console.log("toDelete:", toDelete);
                    //
                    node.next = node.next.next;
                    toDelete.next = null;
                    this.length -= 1;
                }
            }
            node = node.next;

        }


    }

    // print the data of every node
    display() {
        var runner = this.head;
        while(runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    // given a pointer to a list, if not using this.head, recursively traverse the list
    // do not loop
    // print the data of every node
    recursiveDisplay(current = this.head) {
        if (current.head === null) { // No nodes
            console.log("No values found - empty list");
        } else { // At least one node
            console.log(current.data); // Print value at current node
            if (current.next !== null) {
                this.recursiveDisplay(current.next);
            }
        }
    }

    // bonus
    // given the head node of a new list, return true or false
    // if it contains the same data as the current list
    compare(listHead) {
        console.log(this.length);
        console.log(listHead.length);
        if (this.length !== listHead.length) { // Not of equal length
            return false;
        } else {
            var thisListNode = this.head;
            var otherListNode = listHead.head;
            console.log(thisListNode);
            console.log(otherListNode);
            while (thisListNode !== null) {            // just changed thisListNode.next --> thisListNode (should work now - hopefully) "it works :)"
                if (thisListNode.data !== otherListNode.data) {
                    return false;
                }
                // Move on to next node in each list
                thisListNode = thisListNode.next;
                otherListNode = otherListNode.next;
            }
            return true; // All values are equal across the list
        }
    }

    removeFromFront(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    removeFromBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
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
            this.length = 1;
            return;
        };

        node.next = this.head;
        this.head = node;
        this.length += 1;
        return;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            return
        }

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
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
            return;
        }

        node.next = this.head;
        this.head = node;
        return;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mySLL = new SLL();

mySLL.addToFront(new Node(7));
mySLL.addToFront(new Node(10));
mySLL.addToFront(new Node(13));
mySLL.addToFront(new Node(16));
mySLL.addToFront(new Node(21));

var otherSLL = new SLL();

otherSLL.addToFront(new Node(7));
otherSLL.addToFront(new Node(10));
otherSLL.addToFront(new Node(13));
otherSLL.addToFront(new Node(16));
otherSLL.addToFront(new Node(21));

mySLL.display()
mySLL.recursiveDisplay()

console.log(mySLL.compare(otherSLL));