class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let NewNode = new node(val)
        if (!this.first) {
            this.first = NewNode;
            this.last = NewNode;
        }
        else {
            let temp = this.first;
            this.first = NewNode;
            this.first.next = temp;
        }
        this.size++;
    }
    pop() {
        let temp = this.first
        if (!this.first) {
            return null;
        }
        else {
            if (this.first === this.last) {
                this.last = null
                this.first = null
            }
            this.first = this.first.next;
            this.size--;
        }
        return temp.val;
    }
    print() {
        let current = this.first
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

let list = new stack();
list.push("Hello");
list.push("My");
list.push("Name")
// list.print()
list.pop();
list.pop();
// list.pop();
list.print()
// console.log(list)