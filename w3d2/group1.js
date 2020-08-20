// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==


    // return true or false if val exists within the DLL
    exists(val) {
        let rover = this.head;
        while (rover !== null && rover.data !== val) {
            rover = rover.next;
        }
        return rover !== null;   // If rover !== null, then rover.data === val. Otherwise, the value does not exist in the list
    }

    existsVersion3(val){
        if(this.isEmpty()) {
          return false;
        }
        var pointer = this.head;
        while(pointer) {
          if (pointer.data == val) {
            return true
          }
          pointer = pointer.next;
        }
        return false;
      }

    // remove and return node with data === val if it exists
    // remove and return the first match that you find or assume unique values
    removeVal(val) {
        if (!this.isEmpty()) { // list is nonempty
            if (this.head === this.tail) { // list has a single element
                let hold = null;
                if (this.head.data === val) { // the single element's data has the value
                    hold = this.head;
                    this.head = (this.tail = null);
                    this.length--;
                }
                return hold;
            } else { // list has more than one element
                if (this.head.data === val) { // and it's contained in the head
                    let hold = this.head;
                    this.head = this.head.next;

                    hold.next = null;
                    this.head.prev = null;
                    this.length--;
                    return hold;
                } else if (this.tail.data === val) { // and it's contained in the tail
                    let hold = this.tail;
                    this.tail = this.tail.prev;

                    this.tail.next = null;
                    hold.prev = null;
                    this.length--;
                    return hold;
                } else { // and it may or may not exist in the middle
                    let rover = this.head;
                    while (rover !== null && rover.data !== val) {
                        rover = rover.next;
                    }
                    if (rover !== null) { // indicates that rover.data === val. In the case where rover === null, we know that the value does not exist in the list
                        let beforeRover = rover.prev;
                        let afterRover = rover.next;
                        if (beforeRover !== null) { // if possible, set before to point ahead of the rover
                            beforeRover.next = afterRover;
                        }
                        if (afterRover !== null) {  // if possible, set after to point before the rover
                            afterRover.prev = beforeRover;
                        }
                        this.length--;
                        rover.prev = (rover.next = null); // extract the rover
                    }
                    return rover;
                }
            }
        }
        return null; // obviously empty lists cannot contain the value
    }

    removeValVersion3(val){
        if(this.isEmpty()) { // empty DLL
            return;
        } else if (this.head.data === val) { // remove on head
            if(this.length === 1) { // condition head and tail is same node
                var temp = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
            } else { // condition that length >= 2
                var temp = this.head;
                this.head = this.head.next;
                this.head.prev = null;
                temp.next = null;
                this.length--;
          }
            return temp;
        } else {
            var pointer = this.head.next;
            while(pointer) {
                if(pointer.data === val) {
                    if(pointer.next!=null) { // remove on node between head and tail
                        var prevNode = pointer.prev;
                        prevNode.next = pointer.next;
                        pointer.next.prev = prevNode;
                        pointer.next = null;
                        pointer.prev = null;
                        this.length--;
                        return pointer;
                    } else { // remove on tail
                        var prevNode = pointer.prev;
                        this.tail = prevNode;
                        prevNode.next = null;
                        pointer.prev = null;
                        this.length--; // basically remove tail
                        return pointer;
                    }
                }
                pointer = pointer.next;
            }
        }
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome() {
        let leftRover = this.head;
        let rightRover = this.tail;
        //   i < (length - 1 - i)    IFF 2i + 1 < length
        for (let i = 0; ((2 * i) + 1) < this.length; i++) {
            if (leftRover.data !== rightRover.data) {
                return false;
            }
            leftRover = leftRover.next;
            rightRover = rightRover.prev;
        }
        return true;
    }

    checkPalindromeVersion3() {
        var frontRunner = this.head;
        var backRunner = this.tail;
        while(frontRunner) {
          if (frontRunner.data !== backRunner.data) {
            return false;
          }
          frontRunner = frontRunner.next;
          backRunner = backRunner.prev;
        }
        return true;
      }

    // push to head
    addHead(node){
         if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail(){
        if(this.head == null) return;
        if(this.head === this.tail){
            var temp = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    // add node before target if target exists
    // target is a node data
    prepend(target, node){
        var runner = this.head;
        if(runner && runner.data === target) {

        return this.addHead(node);
        }
        while(runner.data !== target){
            runner = runner.next;
            if(runner == null) return;
        }
        runner.prev.next = node;
        node.prev = runner.prev;
        runner.prev = node;
        node.next = runner;
        this.length++;
    }

    prepend2(target, node){
        var runner = this.head;
        while(runner){
            if(runner.data === target){
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if(runner === this.head){
                    this.head = node;
                }
            }else{
                runner = runner.next;
            }
        }
    }

    // return is empty
    isEmpty(){
        return this.head === null;
    }

    // return length
    size(){
        return this.length;
    }


    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){}

    // add after target if exists
    append(target, node){}

    // pop from head
    removeHead(){}
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}