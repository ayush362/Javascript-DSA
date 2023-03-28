class node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


// let first = new node("Hello")
// first.next = new node("There")
// first.next.next = new node("How")
// first.next.next.next = new node("Are")
// first.next.next.next.next = new node("You?")

class singlylinkedlist {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new node(val)
        if (!(this.head)) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

 printList() {
    let current = this.head
    while (current) {
        console.log(current.val)
        current = current.next
    }
}
}


let list = new singlylinkedlist()
list.push("Hi")
list.push("there")
list.push("How")
list.push("are")
list.push("you")


list.printList()