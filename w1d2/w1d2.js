// SLL
// Stack Queues
// DS
// Binary Search Tree


class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
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

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.length++;
            this.head = node;
            return
        }

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                this.length++;
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

    // recursiveContains(7); .... recursivecontains(7, node)

    addToFront(node){
        if(this.isEmpty()){
            this.length++;
            this.head = node;
            return;
        };

        this.length++;
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

while(runner){
    console.log(runner.data);
    runner = runner.next;
}

console.log(runner);