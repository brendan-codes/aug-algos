// SLL
// Stack Queues
// DS
// Binary Search Tree


class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty(){
        return this.head === null;
    }

    // return true or false if the value is contained in the list
    contains(val){
        runner = this.head;

        while(runner){
            if(runner.data === val){ // checks data value for each node
                return true
            } else {
                console.log("Doesn't match... we're at: ", runner.data)
                runner = runner.next;
            }
        }

        return false;
    }
    // add the given node to the back of the list
    addToBack(node){
        runner = this.head;

        while(runner.next){
            runner = runner.next;
            console.log("We're at: ", runner.data)
        } // when this finishes we reach end of LL

        runner.next = node;

    }

    // bonus
    recursiveContains(val, current){
        if(!current){
            current = this.head;
        }
        if (current === null) { // base case
            return false
        }
        if(val === current.data) { // found node that contains val
            return true
        } else {
            return this.recursiveContains(val, current.next) // recursion statement
        }

    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            return;
        };

        node.next = this.head;
        this.head = node;
        return;
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

var runner = mySLL.head;

// while(runner){
//     console.log(runner.data);
//     runner = runner.next;
// }

console.log(mySLL.contains(7));