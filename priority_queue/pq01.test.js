class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}

class PriorityQueue {
    constructor() {
        this.minHeap = new MinHeap();
    }

    queue(value) {
        this.minHeap.insert(value);
    }

    dequeue() {
        return this.minHeap.remove();
    }

    isEmpty() {
        return this.minHeap.heap.length === 0;
    }

    peek() {
        return this.minHeap.heap[0];
    }
}




test('test', () => {
    // Create a new priority queue
    const queue = new PriorityQueue();

    // Add elements to the queue
    queue.queue(5);
    queue.queue(1);
    queue.queue(3);

    // Remove and return the highest-priority element
    console.log(queue.dequeue()); // Output: 1
    console.log(queue.dequeue()); // Output: 3
    console.log(queue.dequeue()); // Output: 5
});