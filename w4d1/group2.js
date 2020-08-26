class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// binary tree
class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null; // Empty if root is null only
    }

    // insert(node, tree){
    //     var newNode = new BSTNode(val);
    //     if(!this.root) {
    //         this.root =newNode
    //     } else {
    //         this.in
    //     }
    // };

    insertV2(node, tree = this.root) {
        if (this.root == null) { // Edge case: no nodes at start of tree or at entry point
            this.root = node;
            return;
        }
        if (node.val <= tree.val) { // Smaller or equal to on the left
            if (tree.left == null) { // No node at left pointer
                tree.left = node; // Insert node
            } else {
                this.insert(node,tree.left); // Move down tree
            }
        } else { // Bigger value, so go right
            if (tree.right == null) { // At end - no node at right pointer
                tree.right = node; // Insert node
            } else { // Move down tree to the right
                this.insert(node,tree.right);
            }
        }
    }

    getLargestFromSubtree(tree = this.head) {
        if (tree == null) {
            return; // No nodes - nothing to return
        } else {
            var curNode = tree;
            while (curNode.right != null) {
                curNode = curNode.right; // Keep moving to the right since the value is bigger to the right
            }
            return curNode.val; // Return value at the node at the end
        }
    }

    getSmallestFromSubtree(tree = this.head) {
        if (tree == null) {
            return; // No nodes - nothing to return
        } else {
            var curNode = tree;
            while (curNode.left != null) {
                curNode = curNode.left; // Keep moving to the left since the value is smaller to the left
            }
            return curNode.val; // Return value at the node at the end
        }
    }
}

// https://www.cs.usfca.edu/~galles/visualization/BST.html