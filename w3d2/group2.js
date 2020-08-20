// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==


    // return true or false if val exists within the DLL
    exists(val){}

    // remove and return node with data === val if it exists
    // remove and return the first match that you find or assume unique values
    removeVal(val){}

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