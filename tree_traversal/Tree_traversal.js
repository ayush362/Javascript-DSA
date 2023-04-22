class node {
    constructor(value) {
        this.val = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new node(val)
        if (!this.root) {
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
                    return this
                }
                else {
                    current = current.left
                }
            }
            else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                else {
                    current = current.right
                }
            }
        }
    }
    BinaryFirstSearch() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

        }
        console.log(data)
        return data
    }
    DFSpreorder() {
        let data = [];
        let current = this.root
        function traverse(node) {
            data.push(node.val)
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        console.log(data)
        return data
    }
    DFSPostorder() {
        let data = [];
        let current = this.root
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            data.push(node.val)
        }
        traverse(current)
        console.log(data)
        return data
    }
    DFSInorder() {
        let data = [];
        let current = this.root
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            data.push(node.val)
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        console.log(data)
        return data
    }
}
let list = new binarySearchTree()
list.insert(10);
list.insert(6);
list.insert(3);
list.insert(8);
list.insert(15);
list.insert(20);
// list.insert(40);
// list.insert(90);
// list.insert(44);
// list.insert(33);
// list.BinaryFirstSearch()
// list.DFSpreorder()
// list.DFSPostorder()
list.DFSInorder()