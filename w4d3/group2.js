class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

class BST {
    constructor() {
        this.root = null;
    }

    // height
    // size
    // delete(val)


    // Preorder (DFS - Depth First Search)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    printPreorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            // read val, then recurse
            console.log(current.val);
            this.printPreorder(current.left);
            this.printPreorder(current.right);
        }
    }

    // Inorder (DFS)
    // (Left, Root / Parent, Right)
    // 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    printInorder(current = this.root){
      if(current.left) { // left
        this.printInorder(current.left);
      }
      console.log(current.val); // root

      if(current.right) { // right
        this.printInorder(current.right)
      }
    }

    // Postorder (DFS)
    // (Left, Right, Root / Parent)
    // 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(current = this.root){
      if(current.left) { // left
        this.printPostorder(current.left);
      }

      if(current.right) { // right
        this.printPostorder(current.right)
      }

      console.log(current.val); // root
    }

    // Preorder (DFS)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    returnPreorderArray(current = this.root, array){

      if(arr === undefined){
            current = this.root;
            var arr = [];
        }

        if(current){
            // read val, then recurse
            arr.push(current.val);
            leftArr = this.returnPreorderArray(current.left, arr);
            for (var i = 0; i < leftArr.length(); i++) {
              arr.push(leftArr[i]);
            }
            rightArr = this.returnPreorderArray(current.right, arr);
            for (var j = 0; j < rightArr.length(); j++) {
              arr.push(rightArr[j]);
            }
        }
    }


    // BONUS
    // Levelorder (BFS - Breath first search)
    // Row-by-row left-right top-down
    // 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
    // HINT: you can use a queue, stack, or array to store nodes
    printLevelorder(current){}

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current){
        if(current === undefined){
            current = this.root;
        }

        // if current is null, return false up the call stack
        if(current == null){
            return false;
        }

        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if(current.val === val){
            return true;
        }

        // otherwise we need to recurse

        // decide on which direction
        if(current.val > val){
            current = current.left;
        }else{
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current);
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current){
        if(current === undefined){
            current = this.root;
        }

        // first iteration possibly move the head
        if(current.left === null){
            this.root = current.right;
            current.right = null;
            return current;
        }

        // look ahead
        if(current.left && (current.left.left === null)){
            var smallest = current.left;
            current.left = smallest.right;
            smallest.right = null;
            return smallest;
        }

        return this.removeSmallest(current.left);
    }

    // remove and return the largest node of a given tree
    removeLargest(current){}

    isEmpty(){
        return this.root === null;
    };

    insert(node, tree){
        if(tree === undefined){
            tree = this.root;
        };

        if(tree === null){
            this.root = node;
            return;
        };

        // go left
        if(tree.val > node.val){
            // check if null and add
            if(tree.left === null){
                tree.left = node;
                return;
            }else{
                // else recurse left
                return this.insert(node, tree.left);
                    //  --->
            }
        // else go right
        }else if(tree.val < node.val){
            // check if null and add
            if(tree.right === null){
                tree.right = node;
                return;
            }else{
                // else recurse right
                return this.insert(node, tree.right);
            }
        }
    };

    getLargestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // if tree becomes null, return null
        if(tree === null){
            return null;
        }

        // if there is no further nodes, return tree
        if(tree.right === null){
            return tree.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(tree.right);
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // if tree becomes null, return null
        if(tree === null){
            return null;
        }

        // if there is no further nodes, return tree
        if(tree.left === null){
            return tree.val;
        }

        // else recurse to the left and try again
        return this.getSmallestFromSubtree(tree.left);
    }}

// 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
var myBST = new BST();
myBST.insert(new BSTNode(25))
myBST.insert(new BSTNode(15))
myBST.insert(new BSTNode(50))
myBST.insert(new BSTNode(10))
myBST.insert(new BSTNode(22))
myBST.insert(new BSTNode(35))
myBST.insert(new BSTNode(70))
myBST.insert(new BSTNode(4))
myBST.insert(new BSTNode(12))
myBST.insert(new BSTNode(18))
myBST.insert(new BSTNode(24))
myBST.insert(new BSTNode(31))
myBST.insert(new BSTNode(44))
myBST.insert(new BSTNode(66))
myBST.insert(new BSTNode(90))

console.log(myBST);

myBST.returnPreorderArray();