class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }


    // Remove from front: remove and return the first node in the SLL
    removeFromFront(){
        var frontNode = this.head;
        // move head to point at second node
        this.head = frontNode.next;
        frontNode.next = null;

        this.length--;

        return frontNode;
    }
    // Remove from back: remove and return the last node in the SLL
    removeFromBack(){
        // should do a check if LL is size 1
        // -->
        if (this.head !== null) {
            let runner = this.head;
            // start while loop
            while (runner.next.next !== null) {
                runner = runner.next;
            }
            var lastNode = runner.next;
            // remove runner...
            runner.next = null;

            this.length--;

            return lastNode;
        }
    }
    // Size: return the total amount of nodes in the list. how can this be done without iterating?
    size(){
        return this.length;
    }
    // Range: return the range of a integer linked list as a string. ex: "9-19"
    range(){
        if(!this.head.isEmpty()){
            let runner = this.head;
            var min;
            var max;
            // while loop
            while(runner.next !== null) {

            }
        }
    }
    // Return middle: return the middle node of a linked list, if there is one. if even, return null.
    returnMiddle(){}


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
            this.length++;
            return;
        };

        node.next = this.head;
        this.head = node;
        this.length++;
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
        this.length++;
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
console.log(mySLL);

console.log(mySLL.removeFromBack());
console.log(mySLL);
console.log("size:", mySLL.size())
