class SLL {
    constructor() {
        this.head = null;
    }

    // given a SORTED numeric SLL, remove duplicates in place
    removeDupesSorted() {
        var curNode = this.head;
        var nextNode;
        while (curNode != null) {
            console.log("Current node = ",curNode);
            console.log("Current node's value = ",curNode.data);
            nextNode = curNode.next; // Look at node after current one
            console.log("Next node = ",nextNode);
            if (nextNode != null && curNode.data === nextNode.data) { // If values match
                curNode.next = nextNode.next; // Move pointer
                nextNode.next = null; // Remove next node
                nextNode = curNode.next; // Move next node up - DON'T move current node yet
            } else {
                curNode = curNode.next; // Move current node along - different values
            }
        }
    }

    // given a numeric SLL of either positive or negative numbers, remove
    // negative numbers in place
    removeNegatives() {
        var runner = this.head;
        var secondRunner = this.head.next;
        while(runner.next) {
            if (secondRunner.data < 0) {
                runner.next = null;
                runner = secondRunner;
                secondRunner = secondRunner.next;
            } else {
                runner = secondRunner;
                secondRunner = secondRunner.next;
            }
        }
    }

    // My version (Adrian)
    removeNegativesV2() {
        var curNode = this.head;
        if (this.head == null) { // No nodes: don't bother
            return;
        }
        var nextNode = curNode.next;
        // While loop for removing negatives everywhere EXCEPT start (will be handled farther down)
        while (nextNode != null) {
            if (nextNode.data < 0) {
                curNode.next = nextNode.next;
                nextNode.next = null;
            } else {
                curNode = curNode.next;
            }
            nextNode = curNode.next;
        }
        // Now look at first node to see if it's negative
        var firstNode = this.head;
        if (firstNode != null && firstNode.data < 0) { // If null; shouldn't reach the 2nd condition (would lead to exception otherwise)
            this.head = firstNode.next; // Move head to next node (all nodes after 1st are positive)
            firstNode.next = null;
        }
    }

    // recursively return the largest node in the
    // current and the max should be this.head on the first call
    recursiveMax(current=this.head, max) {
        if (this.head == null) { // No nodes: no max value
            return;
        } else if (current.next == null) { // Base case: last node
            if (max == undefined) { // Edge case: only one node
                max = this.head.data;
            }
            return Math.max(max,current.data);
        } else {
            if (max == undefined) { // Start with max value at first node
                max = this.head.data;
            }
            max = Math.max(max,current.data); // Get current max value
            return this.recursiveMax(current.next, max); // Recursion: look at remaining nodes
        }
    }

    // I'll do the recursive one, Ryan - wanna give maybe one of the
    // first two a try?


    reverse() {
        var prev = null;
        var current = this.head;
        var next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    nthFromLast(n) {
        if (this.head === null) {
            return this.head;
        }
        var runnerFast = this.head;
        var runnerSlow = this.head;
        var count = 0;
        while (runnerFast) {
            if (count >= n) {
                runnerSlow = runnerSlow.next;
            }
            runnerFast = runnerFast.next;
            count++;
        }
        return runnerSlow;
    }

    nthFromLast2(n) {
        if (this.head === null) {
            return this.head;
        }
        var runner = this.head;
        while (n > 0) {
            runner = runner.next;
            n--;
        }
        var secondRunner = this.head;
        while (runner) {
            runner = runner.next;
            secondRunner = secondRunner.next;
        }
        return secondRunner;
    }

    display(){
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    delete(data) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == data) {
            this.head = runner.next;
            return;
        }

        while (runner && runner.data !== data) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
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

    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            return
        }

        // "10" == 10 yes
        // "10" === 10 no

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

    recursiveContains(current, value){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(current.next, value);
    }

    removeHead(){
        if(this.isEmpty()) return null;
        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        return removed.value;
    }

    removeBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}