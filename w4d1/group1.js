"use strict";

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
        return this.root === null;
    };

    insert(node, tree) {
        node.left = (node.right = null);
        if (tree.isEmpty()) {
            tree.root = node;
        } else {
            let rover = tree.root;
            while ((node.val < rover.val && rover.left !== null)
            || (node.val >= rover.val && rover.right !== null)) {
                if (node.val < rover.val) {
                    rover = rover.left;
                } else {
                    rover = rover.right;
                }
            }
            if (node.val < rover.val) {
                rover.left = node;
            } else {
                rover.right = node;
            }
        }
    };

    getLargestFromSubtree(tree) {
        if (tree.isEmpty()) {
            return null;
        }
        let rover = tree.root;
        while (rover.right !== null) {
            rover = rover.right;
        }
        return rover.val;
    }

    getSmallestFromSubtree(tree) {
        if (tree.isEmpty()) {
            return null;
        }
        let rover = tree.root;
        while (rover.left !== null) {
            rover = rover.left;
        }
        return rover.val;
    }

// https://www.cs.usfca.edu/~galles/visualization/BST.html
}