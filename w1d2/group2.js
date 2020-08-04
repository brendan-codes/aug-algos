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
    contains(val) {
        let rover = this.head;
        while (rover !== null) {
            if (rover.data === val) {
                return true;
            }
            rover = rover.next;
        }
        return false;
    }

    // add the given node to the back of the list
    addToBack(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            let rover = this.head;
            while (rover.next !== null) {
                rover = rover.next;
            }
            rover.next = node;
        }
    }
    // bonus
    recursiveContains(val, current){
        return (current !== null) && (current.data === val || this.recursiveContains(val, current.next));
    } // woah nice -brendan


    // bonus challenge #2
    // given a linked list of ints, return the average
    averageNumericalList() {
        if (this.isEmpty()) {
            return null;
        }
        let rover = this.head;
        let sum = rover.data, size = 1;
        while (rover.next !== null) {
            rover = rover.next;
            sum += rover.data;
            size += 1;
        }
        return sum / size;
    }

    // https://prod.liveshare.vsengsaas.visualstudio.com/join?737184239C16E47E6DFB891D2520A636809D

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

    render() {
        if (this.head === null) {
            return "X";
        } else {
            let rover = this.head;
            let retr = rover.data;
            while(rover.next !== null) {
                rover = rover.next;
                retr = retr + " -> " + rover.data;
            }
            return retr + " -> X";
        }
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