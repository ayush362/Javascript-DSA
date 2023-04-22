class node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new node(val);
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let poppendNode = this.tail;
        if (!this.head) {
            return undefined
        }
        else {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.tail = this.tail.prev
                this.tail.next = null;
                poppendNode.prev = null

            }
        }
        this.length--
        console.log(`The value poped out is ${poppendNode.val}`);
        return poppendNode.val;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        else {
            let popeedOut = this.head;
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            else {
                this.head = this.head.next
                popeedOut.next = null;
                this.head.prev = null;
            }

            this.length--;
            console.log(`The popped out item from the beggining is ${popeedOut.val}`)
            return popeedOut;
        }
    }
    unshift(val) {
        let newNode = new node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode;

        }
        this.length++;
        return this
    }
    print() {
        if (!this.head) {
            return undefined
        }
        else {
            let current = this.head
            while (current) {
                console.log(current.val)
                current = current.next
            }
        }
    }
}

let list = new doublyLinkedList();
list.push("Starting");
list.push("Ayush");
list.push("khatri");
list.push("Hello");
list.push("Last");
list.unshift("first element")
list.pop();
list.shift();
// console.log(list)
list.print()