class MaxBinaryHeap {
    constructor() {
        this.data = [41, 39, 33, 18, 27, 12]
    }
    insert(element) {
        this.data.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.data.length - 1
        let element = this.data[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.data[parentIdx]
            if (element < parent) {
                break;
            }
            this.data[parentIdx] = element
            this.data[idx] = parent
            idx = parentIdx;
        }
        console.log(this.data)
    }
    extractMax() {
        const max = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = end;
            this.sinkdown();
        }
        console.log(`The value removed is ${max}`);
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
                if (leftChild > element) {
                    swap = LeftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.data[rightChildIdx]
                if (swap === null && rightChild > element || swap !== null && rightChild > leftChild) {
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

let list = new MaxBinaryHeap()
list.insert(55)
list.extractMax()
// list.extractMax() 
// list.extractMax()
// list.extractMax()
// list.extractMax()
// list.extractMax()
// list.extractMax()
