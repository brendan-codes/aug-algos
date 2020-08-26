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
            // read everything, then recurse
            console.log(current.val);
            this.printPreorder(current.left);
            this.printPreorder(current.right);
        }
    }
    // BST.printPreorder();

// Inorder (DFS)
// (Left, Root / Parent, Right)
// 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    printInorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            // recurse left, then read, then recurse right
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

// Postorder (DFS)
// (Left, Right, Root / Parent)
// 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            // recurse in both directions, then read
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

// Preorder (DFS)
// (Root / Parent, Left, Right)
// 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    returnPreorderArray(current, array){
        if(current === undefined){
            current = this.root;
        }

        if(array === undefined){
            array = [];
        }

        if(current){
            array.push(current.val);
            this.printPreorderArray(current.right, array);
            this.printPreorderArray(current.left, array);
        }

        return array; // => [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
    }


// BONUS
// Levelorder (BFS - Breath first search)
// Row-by-row left-right top-down
// 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
// HINT: you can use a queue, stack, or array to store nodes
    printLevelorder(current){
        if(current === undefined){
            current = this.root;
        };

        var queue = []; // "queue"

        // [22. 35, 70, 4, 12]



        if(current){
            queue.push(current);
        }

        while (queue.length > 0){
            var dequeuedNode = queue.shift(); // should probably import our actual queue
            console.log(dequeuedNode.val);

            if(dequeuedNode.left){
                queue.push(dequeuedNode.left);
            }

            if(dequeuedNode.right){
                queue.push(dequeuedNode.right);
            }
        }
    }

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

// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html