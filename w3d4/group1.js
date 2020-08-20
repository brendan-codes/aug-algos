class SLL {
    constructor() {
        this.head = null;
    }



    // partition a SList such that all values less than the given value are to the left of it,
    // and all values greater than the given value are to the right (not perfectly sorted)
    partition(val) {
        if (this.head === null) {
            return this;
        }
        let ltFront = null, ltRear = null, eqFront = null, eqRear = null, gtFront = null, gtRear = null;
        let mainRover = this.head;
        while (mainRover != null) { // partitioning into three SLLs
            let hold = mainRover;
            mainRover = mainRover.next;

            if (hold.data < val) {
                if (ltRear === null) {
                    ltFront = (ltRear = hold);
                } else {
                    ltRear = (ltRear.next = hold);
                }
                ltRear.next = null;
            } else if (hold.data === val) {
                if (eqRear === null) {
                    eqFront = (eqRear = hold);
                } else {
                    eqRear = (eqRear.next = hold);
                }
                eqRear.next = null;
            } else {
                if (gtRear === null) {
                    gtFront = (gtRear = hold);
                } else {
                    gtRear = (gtRear.next = hold);
                }
                gtRear.next = null;
            }
        }

        if (ltFront !== null) { // connecting the three SLLs
            this.head = ltFront;
            if (eqFront !== null) {
                ltRear.next = eqFront;
                eqRear.next = gtFront;
            } else {
                ltRear.next = gtFront;
            }
        } else if (eqFront !== null) {
            this.head = eqFront;
            eqRear.next = gtFront;
        } else {
            this.head = gtFront;
        }

        return this;
    }


    // 7, 1, 5, 3, 10, 6, 13, 2, 9

    // 6 ->

    // 1, 5, 3, 2, 6, 7, 10, 13, 9


    partitionV2(val) {
        if (this.head == null || this.head.next == null) { // No nodes or only one node
            return this;
        } // At this point, you have 2 or more nodes
        var leftList = new SLL();
        var rightList = new SLL();
        var middleList = new SLL(); // For nodes that contain that value
        var curNode = this.head;
        var nextNode;

        // Move nodes to their respective lists
        while (curNode != null) {
            nextNode = curNode.next;
            console.log("Current node's value = ",curNode.data);
            console.log("Next node: ",nextNode);
            this.head = nextNode; // Move head
            curNode.next = null; // Cut off pointer
            if (curNode.data < val) {
                console.log("Adding to left");
                leftList.addToBack(curNode);
            } else if (curNode.data > val) {
                console.log("Adding to right");
                rightList.addToBack(curNode);
            } else {
                console.log("Adding to middle");
                middleList.addToBack(curNode);
            }
            curNode = nextNode; // Move to next node
        }
        // Put lists together
        var leftNode = leftList.head;
        // Look for last node in left list, if possible
        while (leftNode != null && leftNode.next != null) {
            leftNode = leftNode.next;
        }
        // Look for last node in middle list, if possible
        var middleNode = middleList.head;
        while (middleNode != null && middleNode.next != null) {
            middleNode = middleNode.next;
        }
        // Now link lists together
        if (leftNode == null && middleNode == null) { // Both left and middle lists are empty
            this.head = rightList.head;
        } else if (leftNode == null && middleNode != null) { // Left empty, middle not empty
            this.head = middleList.head;
            middleNode.next = rightList.head; // Link middle and right lists
        } else if (leftNode != null && middleNode == null) { // Left not empty, middle empty
            this.head = leftList.head;
            leftNode.next = rightList.head; // Link left and right lists
        } else { // Both not empty
            this.head = leftList.head;
            leftNode.next = middleList.head; // Link left and middle lists
            middleNode.next = rightList.head; // Link the merged left + middle lists with the right list
        }
        return this;
    }


    // given a SORTED numeric SLL, remove duplicates in place
    removeDupesSorted(){
        if(this.isEmpty()){
            return;
        }

        // the head can never be a duplicate
        var runner = this.head;

        // check one past the runner
        while(runner.next){
            // compare data
            if(runner.data === runner.next.data){
                // it's a duplicate, let's look past it
                var newNext = runner.next.next;
                runner.next = newNext;
            } else {
                // it's not a duplicate, move the runner
                runner = runner.next;
            }
        }
    }

    // given a numeric SLL of either positive or negative numbers, remove
    // negative numbers in place
    removeNegatives(){
        // start with empty check
        if(this.isEmpty()){
            return;
        }

        let runner = this.head;

        // find the first positive number
        while(runner && runner.data < 0) {
            runner = runner.next;
        }

        // and move the head to it
        this.head = runner;

        // now start removing the rest
        while (runner && runner.next) {
            if(runner.next.data < 0){
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
    }

    // recursively return the largest node.data
    recursiveMax(current, max){
        // default to head on both
        if(current === undefined){
            current = this.head;
            max = this.head;
        }

        // null head, empty list
        if(this.head === null){
            return null;
        }

        // current null, read off the end
        if(current === null){
            return max.data;
        }

        // update max
        if(current.data > max.data){
            max = current;
        }

        // recurse on the next node, pass the max
        return this.recursiveMax(current.next, max);
    }

    // SLL.recursiveMax();


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