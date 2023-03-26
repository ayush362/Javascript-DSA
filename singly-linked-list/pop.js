class node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

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
    pop()
    {
        let current = this.head
        let newTail = current;
        if(!(this.head))
        {
            return undefined
        }
        else{
            while(current.next)
            {
                newTail = current
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null
            this.length--
            console.log(`The poped item is ${current.val}`)

        }
    }
    printlist()
    {
        let current = this.head
        while(current)
        {
            console.log(current.val)
            current = current.next
        }
    }
}

let list = new singlylinkedlist()
list.push("My")
list.push("Name")
list.push("is")
list.push("Ayush")
list.push("Khatri")

list.pop()
list.printlist()

