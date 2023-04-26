class priorityQueue {
    constructor() {
        this.data = []
    }
    Enqueue(val, priority) {
        let newnode = new node(val,priority)
        this.data.push(newnode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.data.length - 1
        let element = this.data[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.data[parentIdx]
            if (element.priority < parent.priority) {
                break;
            }
            this.data[parentIdx] = element
            this.data[idx] = parent
            idx = parentIdx;
        }
        console.log(this.data)
    }
    dequeue() {
        const max = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = end;
            this.sinkdown();
        }
        console.log(`The value removed is ${max.val}`);
        console.log(this.data)
        return max
    }
    sinkdown() {
        let idx = 0;
        const length = this.data.length;
        const element = this.data[0];
        while (true) {
            let LeftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (LeftChildIdx < length) {
                leftChild = this.data[LeftChildIdx]
                if (leftChild.priority > element.priority) {
                    swap = LeftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.data[rightChildIdx]
                if (swap === null && rightChild.priority > element.priority || swap !== null && rightChild.priority > leftChild.priority) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) {
                console.log(this.data)
                break;
            }
            this.data[idx] = this.data[swap]
            this.data[swap] = element
            idx = swap
        }
    }
}

class node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}

let list = new priorityQueue()
list.Enqueue(55,1)
list.Enqueue(50,2)
list.Enqueue(5,3)
list.Enqueue(70,4)
list.dequeue()
// list.extractMax()
// list.extractMax()
// list.extractMax()
// list.extractMax()
// list.extractMax()
// list.extractMax()
