module.exports = class PriorityQueue {
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
        return this.size();

    }

    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }
        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;

    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _leftChild(idx) {
        return idx * 2 + 1;
    }

    _rightChild(idx) {
        return idx * 2 + 2;
    }

    _swap(i, j) {
        const temp = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = temp;
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j])
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;
        while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        }
    }

    _siftDown() {
        let nodeIdx = 0;

        while (
            (this._leftChild(nodeIdx) < this.size() &&
                this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
            (this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), nodeIdx))
        ) {
            const greaterNodeIdx =
                this._rightChild(nodeIdx) < this.size() &&
                    this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
                    ? this._rightChild(nodeIdx)
                    : this._leftChild(nodeIdx)
            this._swap(greaterNodeIdx, nodeIdx);
            nodeIdx = greaterNodeIdx;
        }


    }

}


// let heap = new PriorityQueue();
// heap.push(5);
// heap.push(10)
// heap.push(20)
// heap.push(45)
