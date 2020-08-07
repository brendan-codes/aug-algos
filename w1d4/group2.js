class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    delete(val) {
        if (this.head !== null) {
            if (this.head.data === val) {
                let hold = this.head;
                this.head = hold.next;
                hold.next = null;
            } else {
                let roverA = this.head;
                let roverB = this.head.next;
                while (roverB !== null && roverB.data !== val) {
                    roverA = roverB;
                    roverB = roverB.next;
                }
                if (roverB !== null) {
                    roverA.next = roverB.next;
                    roverB.next = null;
                }
            }
        }
    }

    // print the data of every node
    display() {
        let rover = this.head;
        while (rover !== null) {
            console.log(rover.data);
            rover = rover.next;
        }
    }

    // given a pointer to a list, if not using this.head, recursively traverse the list
    // do not loop
    // print the data of every node
    recursiveDisplay(current = this.head){
        if (current !== null) {
            console.log(current.data);
            this.recursiveDisplay(current.next);
        }
    }

    // bonus
    // given the head node of a new list, return true or false
    // if it contains the same data as the current list
    compare(listHead) {
        let roverA = this.head;
        let roverB = listHead;
        while (roverA !== null && roverB !== null) {
            // roverA's data did not match roverB's data
            if (roverA.data !== roverB.data) {
                return false;
            }
            roverA = roverA.next;
            roverB = roverB.next;
        }
        // roverA === null or roverB === null
        if (roverA !== null) {
            // roverB === null
            return false;
        }
        // roverA === null
        if (roverB !== null) {
            return false;
        }
        // roverB === null

        // roverA and roverB are null
        return true;
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
            return;
        };

        node.next = this.head;
        this.head = node;
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


