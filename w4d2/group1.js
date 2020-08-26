class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// binary yr
class BST {
    constructor() {
        this.root = null;
    }

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current){
        if (current === undefined) {
            current = this.root;
        }

        if (current === null) {
            return false;
        }
        console.log(current.val);


        if (val === current.val) {
            return true;
        } else if (val < current.val) {
            return this.find(val, current.left);
        } else {
            return this.find(val, current.right);
        }
    }

    findV2(val, current = this.root) {
        if (current === null || current === undefined) {
            return false;
        }
        return (current.val === val) || ((val < current.val) ? this.find(val, current.left) : this.find(val, current.right));
    }

    removeSmallest() {
        if (!this.isEmpty()) {
            if (this.root.left === null) {
                let hold = this.root;
                this.root = this.root.right;
                hold.right = null;
                return hold;
            }

            let leadParent = this.root;
            let leadChild = this.root.left;
            while (leadChild.left !== null) {
                leadParent = leadChild;
                leadChild = leadChild.left;
            }
            leadParent.left = leadChild.right;
            leadChild.right = null;
            return leadChild;
        }
        return null;
    }

    // remove and return the largest node of a given tree
    removeLargest() {
        if (!this.isEmpty()) {
            if (this.root.right === null) {
                let hold = this.root;
                this.root = this.root.left;
                hold.left = null;
                return hold;
            }

            let leadParent = this.root;
            let leadChild = this.root.right;
            while (leadChild.right !== null) {
                leadParent = leadChild;
                leadChild = leadChild.right;
            }
            leadParent.right = leadChild.left;
            leadChild.left = null;
            return leadChild;
        }
        return null;
    }

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