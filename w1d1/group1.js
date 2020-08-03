class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty(){
        return this.head == null; // needs to return true or false
    } // return boolean
    addToFront(node){} // return void
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


var myFirstSLL = new SLL();
myFirstSLL.addToFront(new Node(9));


if(myFirstSLL.head){

}
// { head: {data: 7, next: {data: 8, next null}} }
var myFirstNode = new Node(7);

myFirstSLL.head = myFirstNode;
myFirstSLL.head.next = new Node(8);