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

    // The three below are from 8/25/2020

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current = this.root) {
        if (this.isEmpty()) { // No nodes in tree
            return;
        }
        if (current == null) { // Base case: if we hit a dead end - a null pointer
            return false;
        }
        if (val == current.val) { // Value found at beginning of tree or at current node
            return true;
        } else if (val < current.val) { // Move to left if smaller, then look
            return this.find(val, current.left);
        } else { // Move to right if bigger, then look
            return this.find(val, current.right);
        }
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current = this.root) {
        if (this.isEmpty()) { // No nodes in tree
            return;
        }
        if (current == this.root && current.left == null) { // Edge case: smallest value at start
            this.root = current.right; // Move root to child node to the right
            current.right = null;
            return current;
        }
        if (current.left.left == null) { // Smallest value found (not at top of tree)
            var nodeToRemove = current.left; // Get node to remove
            var childNodes = nodeToRemove.right; // Get all nodes to right of node we're removing - all bigger than node being removed
            current.left = childNodes; // Relink nodes
            nodeToRemove.right = null; // Have node being removed not point to anything now
            return nodeToRemove;
        } else { // Move recursively left
            return this.removeSmallest(current.left);
        }
    }

    // remove and return the largest node of a given tree
    removeLargest(current = this.root) {
        if (this.isEmpty()) { // No nodes in tree
            return;
        }
        if (current == this.root && current.right == null) { // Edge case: smallest value at start
            this.root = current.left; // Move root to child node to the left
            current.left = null;
            return current;
        }
        if (current.right.right == null) { // Largest value found (not at top of tree)
            var nodeToRemove = current.right; // Get node to remove
            var childNodes = nodeToRemove.left; // Get all nodes to left of node we're removing - all smaller than node being removed
            current.right = childNodes; // Relink nodes
            nodeToRemove.left = null; // Have node being removed not point to anything now
            return nodeToRemove;
        } else { // Move recursively right
            return this.removeLargest(current.right);
        }
    }

    // The four below are from 8/24/2020
    isEmpty() {
        return this.root == null;
    }

    insert(node, tree = this.root) {
        if (this.root == null) { // Edge case: no nodes at start of tree or at entry point
            this.root = node;
            return;
        }
        if (tree == null) {
            tree = node;
            return;
        }
        if (node.val < tree.val) { // Smaller on the left - NOTE IN BINARY SEARCH TREES DUPLICATES DON'T NORMALLY POP UP
            if (tree.left == null) { // No node at left pointer - base case
                tree.left = node; // Insert node
                return; // To go back up the call stack
            } else {
                return this.insert(node,tree.left); // Move down tree
            }
        } else { // Bigger value, so go right
            if (tree.right == null) { // At end - no node at right pointer - base case
                tree.right = node; // Insert node
                return; // To go back up the call stack
            } else { // Move down tree to the right
                return this.insert(node,tree.right);
            }
        }
    }

    getLargestFromSubtree(tree = this.root) {
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

    getSmallestFromSubtree(tree = this.root) {
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