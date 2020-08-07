class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // reverse the order of the nodes of a given linked list
    // original: (2) -> (7) -> (8) -> (6) ->
    // reversed: (6) -> (8) -> (7) -> (2) ->
    // do not move .data between nodes
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

    // return a pointer to the second to last node

    // do not use the length property
    secondToLast() {
        let runner = this.head;

        if (!runner) return null;
        if (!runner.next) return null;

        while (runner.next) {
            if (runner.next.next === null) {
                return runner;
            }
            runner = runner.next;
        }
    }

    // return a pointer from the nth to the last node
    // if n is longer than the list length, return null

    // do not use the length property
    nthToLast(n) {
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

    loopDetect() { } // return true false if a loop exists
    loopFix() { } // break the pointer that makes the list a loop

    nthToLast2(n) {
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


    delete(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == data) {
            this.head = runner.next;
            length--;
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
        length--;
        prev.next = runner.next;
    }

    display() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }


    recursiveDisplay(current = this.head) {
        if (current === null) return;
        console.log(current.data);
        this.recursiveDisplay(current.next);
    }


    compare(listHead) {
        if (listHead.length !== this.length) return false; // not the same length
        if (listHead.length === 0 && this.length === 0) return true; // both empty

        let runner1 = listHead;
        let runner2 = this.head;

        // due to both lists being the same length, the while loop
        // only needs to focus on one of them
        while (runner1) {
            // compare
            if (runner1.data !== runner2.data) return false;
            // move runners
            runner1 = runner.next;
            runner2 = runner2.next;
        }

        // survive the while loop, they are the same!
        return true;
    }


    removeFromFront() {
        if (this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    removeFromBack() {
        if (this.isEmpty()) return null;
        if (this.head.next === null) {
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while (current) {
            if (current.next === null) {
                prev.next = null;
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }

    isEmpty() {
        return this.head === null;
    }

    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    addToFront(node) {
        if (this.isEmpty()) {
            this.head = node;
            return;
        };

        node.next = this.head;
        this.head = node;
        return;
    }

    addToBack(node) {
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if (runner === null) {
            this.head = node;
            return
        }

        // start while looping
        while (runner) {
            // check if the next node is null
            if (runner.next === null) {
                // if so, add here and return
                runner.next = node;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    // bonus
    recursiveContains(value, current) {
        // if you didn't pass current, current should be the head
        if (current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if (current === null) return false;

        // if runner.data === value, return true up the call stack
        if (runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(value, current.next);
    }

    addDataToFront(data) {
        var node = new Node(data);
        if (this.isEmpty()) {
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

