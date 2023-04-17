class node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class queue {
    constructor() {
        this.first = null
        this.last = null;
        this.size = 0
    }
    enqueue(val) {
        let NewNode = new node(val)
        if (!this.first) {
            this.first = NewNode
            this.last = NewNode
        }
        else {
            this.last.next = NewNode
            this.last = NewNode
        }
        this.size++;
    }

    dequeue() {
        let temp = this.first;
        if (!this.first) {
            this.last = null
        }
        else {
            if (this.first === this.last) {
                this.last = null
                this.first = null
            }
            else {
                this.first = this.first.next
            }
            this.size--;
        }
        return temp.val;
    }
    print() {
        let current = this.first;
        if (!this.first) {
            return null
        }
        else {
            while (current) {
                console.log(current.val)
                current = current.next
            }
        }

    }

}

let list = new queue()
list.enqueue("Hello")
list.enqueue("MY")
list.enqueue("Name")
list.dequeue();
list.print();