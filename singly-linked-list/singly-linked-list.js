class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedlist {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        console.log(`The removed item is ${current.val}`)
        return current.val
    }

    shift() {
        if (!this.head) {
            return undefined
        }
        else {
            let newHead = this.head
            this.head = this.head.next
            this.length--
            console.log(`The shifted element is ${newHead.val}`)
            return newHead
        }
    }
    unshift(val) {
        let newnode = new node(val)
        if (!this.head) {
            this.head = newnode
            this.tail = this.head
        }
        else {
            newnode.next = this.head
            this.head = newnode
            this.length++
            return this
        }
    }

    printlist() {
        let current = this.head
        if (!this.head) {
            return undefined;
        }
        else {
            while (current) {
                console.log(current.val)
                current = current.next
            }
        }
    }
}

let list = new singlyLinkedlist();
list.push("Hello")
list.push("There")
list.push("how")
list.push("Are")
list.push("You")
list.unshift("Hello")
list.pop()
list.shift()
list.printlist()
