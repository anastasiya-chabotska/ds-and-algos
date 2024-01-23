class PriorityQueue {
    //max heap, a < b would be min heap
    constructor(comparator = (a, b) => a > b) {
        //underscore means private, it should only be used by the class
        this._heap = [];
        this._comparator = comparator;

    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this._heap[0];
    }

    push(val) {
        this._heap.push(val);
        this._siftUp();

    }

    pop() {
        if(this.size() > 1) this._swap(this.size() - 1, 0);
        const poppedValue = this._heap.pop();
        this._siftDown();

    }

    _siftUp() {
        let curIdx = this.size() - 1;
        while (curIdx > 0 && this._comparator(this._heap[curIdx], this._heap[this._getParent(curIdx)])) {
            this._swap(curIdx, this._getParent(curIdx));
            curIdx = this._getParent(curIdx);
        }
    }

    _siftDown() {
        let curIdx = 0;
        while (this._getLeftChild(curIdx) < this.size() && (
            this._comparator(this._heap[this._getLeftChild(curIdx)], this._heap[curIdx]))
            ||
            (this._getRightChild(curIdx) < this.size() && (this._comparator(this._heap[this._getRightChild(curIdx)], this._heap[curIdx]))
        )
        ) {
            const greaterNodeIdx = this._getRightChild(curIdx) && this._heap[this._getRightChild(curIdx)] > this._heap[this._getLeftChild(curIdx)] ? this._getRightChild(curIdx) : this._getLeftChild(curIdx);
            this._swap(greaterNodeIdx, curIdx)
            curIdx = greaterNodeIdx;
        }
    }

    _swap(idx1, idx2) {
        let temp = this._heap[idx1];
        this._heap[idx1] = this._heap[idx2];
        this._heap[idx2] = temp;
    }

    _getParent(idx) {
        return Math.floor((idx - 1) / 2)
    }

    _getLeftChild(idx) {
        return idx * 2 + 1;
    }

    _getRightChild(idx) {
        return idx * 2 + 2;
    }

}


let heap = new PriorityQueue();
heap.push(5);
heap.push(10)
heap.push(20)
heap.push(45)
console.log(heap);
heap.pop()
console.log(heap);
heap.pop()
console.log(heap)
heap.push(7)
console.log(heap)
heap.push(3)
console.log(heap)
heap.push(6)
console.log(heap)
heap.pop()
console.log(heap)