class node {
    constructor(value) {
        this.val = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new node(val)
        if (this.root === null) {
            this.root = newNode
        }
        let current = this.root;
        while (true) {
            if (current.val === val) {
                return undefined
            }
            else if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode
                    return this;
                }
                else {
                    current = current.left
                }
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                else {
                    current = current.right;
                }
            }
        }
    }
    find(val) {
        if (this.root === null) {
            return undefined
        }
        let current = this.root, found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left
            }
            else if (val > current.val) {
                current = current.right
            }
            else {
                found = true
            }
        }
        if (found === false) {
            console.log("False");
            return false
        }
        console.log(current.val)
        return current;
    }
}

let list = new binarySearchTree();
list.insert(50);
list.insert(100);
list.insert(25);
list.insert(12);
list.insert(75);
list.insert(23);
list.insert(40);
list.insert(90);
list.insert(44);
list.insert(33);
list.find(5000);
list.find(100);
console.log(list)
