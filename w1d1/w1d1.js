class SLL {
    constructor() {
        this.head = null;
    }

    // === vs ==

    // 1 === "1"
    // => false

    // 1 == "1"
    // => true

    isEmpty(){
        // booleans can be stored in variables
        // var empty = this.head === null;
        // if(empty){...}

        // or returned directly in return statements
        // return this.head === null;

        if(this.head === null){
            return true;
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

    // pass data rather than node
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


var myFirstSLL = new SLL();
myFirstSLL.addToFront(new Node(9));


if(myFirstSLL.head){

}
// { head: {data: 7, next: {data: 8, next null}} }
var myFirstNode = new Node(7);

myFirstSLL.head = myFirstNode;
myFirstSLL.head.next = new Node(8);




// SLL.head -> {data: 7} -> {data: 8} -> {data: 9} -> null
//         .head         .next        .next        .next

// SLL.head -> {data: 5} -> {data: 7} -> ...


var x = [1, 2, 3];
var y = x; // <- this is not a copy
           // y = directions to x
x.push(4);
console.log(y);

// => [1, 2, 3, 4]


// ['grapes', 'apple', 'pear', 'orange'..... ]
//    0          1      2        3