class PQ {
    //max by default
    constructor(comparator = (a, b) => a > b) {
        this._queue = [];
        this._comparator = comparator;
    }

    _size() {
        return this._queue.length;
    }

    _getParent(idx) {
        return Math.ceil(idx / 2) - 1;
    }

    _getLeftChild(idx) {
        return idx * 2 + 1;
    }

    _getRightChild(idx) {
        return idx * 2 + 2;
    }

    push(val) {
        this._queue.push(val);
        this._siftUp();
    }

    pop() {

        if (this._size() > 1) this._swap(0, this._size() - 1);
        const element = this._queue.pop();
        this._siftDown();
        // this._queue.shift();
        return element;
    }

    peek() {
        return this._queue[0];
    }

    _siftUp() {
        let curIdx = this._size() - 1;
        while (curIdx > 0 && this._comparator(this._queue[curIdx], this._queue[this._getParent(curIdx)])) {
            this._swap(curIdx, this._getParent(curIdx));
            curIdx = this._getParent(curIdx);
        }
    }

    _siftDown() {
        let curIdx = 0;
        while (curIdx < this._size()) {
            let leftIdx = this._getLeftChild(curIdx);
            let rightIdx = this._getRightChild(curIdx);
            //compare it with children, if it doesn't meet comparator condition, perform swap
            if ((this._queue[leftIdx] && !this._comparator(this._queue[curIdx], this._queue[leftIdx])) ||
                (this._queue[rightIdx] && !this._comparator(this._queue[curIdx], this._queue[rightIdx]))) {
                if (this._queue[leftIdx] && this._queue[rightIdx]) {
                    let idx = this._comparator(this._queue[leftIdx], this._queue[rightIdx]) ? leftIdx : rightIdx;
                    this._swap(curIdx, idx);
                    curIdx = idx;
                }
                else {
                    if (this._queue[rightIdx]) {
                        this._swap(curIdx, rightIdx);
                        curIdx = rightIdx;
                    }
                    else {
                        this._swap(curIdx, leftIdx);
                        curIdx = leftIdx;
                    }
                }
            }
            else break;
        }
    }

    _swap(idx1, idx2) {
        let temp = this._queue[idx1];
        this._queue[idx1] = this._queue[idx2];
        this._queue[idx2] = temp;
    }
}
class MedianFinder {
    constructor() {
        this.small = new PQ(); //max heap
        this.large = new PQ((a, b) => a < b); //min heap
    }

    addNum(num) {
        this.small.push(num);
        //check if sizes are ok 
        //check if condition is ok
        if (this.small.peek() > this.large.peek()) {
            const element = this.small.pop();
            this.large.push(element);
        }

        if (Math.abs(this.small._size() - this.large._size()) > 1) {
            if (this.small._size() > this.large._size()) {
                const element = this.small.pop();
                this.large.push(element)
            }
            else {
                const element = this.large.pop();
                this.small.push(element)
            }
        }

    }

    findMedian() {
        if (this.small._size() !== this.large._size()) {
            if (this.small._size() > this.large._size()) return this.small.peek();
            else return this.large.peek();
        }
        else {
            return (this.small.peek() + this.large.peek()) / 2;
        }
    }
}



const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian());
mf.addNum(3);
console.log(mf.findMedian());




//Leetcode fails for one case with custom class, but accepts this using package (check questions section for comment)
class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue(); //max heap
        this.large = new MinPriorityQueue(); //min heap
    }

    addNum(num) {
        this.small.enqueue(num);

        //check if sizes are ok 
        //check if condition is ok
        if (!this.small.isEmpty() && !this.large.isEmpty() && this.small.front().element > this.large.front().element) {
            const element = this.small.dequeue().element;
            this.large.enqueue(element);
        }

        if (Math.abs(this.small.size() - this.large.size()) > 1) {
            if (this.small.size() > this.large.size()) {
                const element = this.small.dequeue().element;
                this.large.enqueue(element)
            }
            else {
                const element = this.large.dequeue().element;
                this.small.enqueue(element)
            }
        }


    }

    findMedian() {
        if (this.small.size() !== this.large.size()) {
            if (this.small.size() > this.large.size()) return this.small.front().element;
            else return this.large.front().element;
        }
        else {
            return (this.small.front().element + this.large.front().element) / 2;
        }
    }
}

// const max = new PriorityQueue();
// max.push(5);
// max.push(7);
// // max.push(20);
// max.push(1);
// max.push(50);
// max.pop();
// max.push(55);
// console.log(max._queue)