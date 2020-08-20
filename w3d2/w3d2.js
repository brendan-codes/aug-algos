// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // return true or false if val exists within the DLL
    exists(val){
        var forwardRunner = this.head;
        var backwardRunner = this.tail;
        var count = Math.ceil(this.length / 2);
        while(count){
            if(forwardRunner.data === val || backwardRunner.data === val){
                return true;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
            count--;
        }
        return false;
    }

    removeVal1(val){
        var runner = this.head;
        if(!runner){
            //
            return runner;
        }
        if(runner === this.tail && runner.data === val){
            // remove head and tail
            this.head = null;
            this.tail = null;
            this.length--;
            return runner;
        }
        if(runner.data === val){
            // remove just head
            this.head = runner.next;
            this.head.prev = null;
            runner.next = null;
            this.length--;
            return runner;
        }
        while(runner){
            if(runner.data === val){
                // remove runner
                if(runner === this.tail){
                    this.tail = runner.prev;
                    runner.prev.next = null;
                    runner.prev = null;
                    length--;
                    return runner;
                }
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                runner.prev = null;
                this.length--;
                return runner;
            }
            runner = runner.next;
        }
    }

    // remove and return node with data === val if it exists
    // remove and return the first match that you find or assume unique values
    removeVal2(val){

    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome(){
        var count = Math.floor(this.length / 2);
        var forwardRunner = this.head;
        var backwardRunner = this.tail;
        if(this.length === 1){
            return true;
        }
        while(count){
            if(forwardRunner.data !== backwardRunner.data){
                return false;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
            count--;
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