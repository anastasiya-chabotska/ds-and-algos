class MedianFinder{
    constructor(){
    }
}

class PriorityQueue{
    //max by default
    constructor(comparator = (a, b)=> a > b){
        this._queue = [];
        this._comparator = comparator;
    }

    _size(){
        return this._queue.length;
    }

    _getParent(idx){
        return Math.ceil(idx / 2) - 1;
    }

    _getLeftChild(idx){
        return idx*2 + 1;
    }

    _getRightChild(idx){
        return idx*2 + 2;
    }

    push(val){
        this._queue.push(val);
        this._siftUp();
    }

    pop(){
        this._swap(0, this._size() - 1);
        this._queue.pop();
        this._siftDown();
    }

    _siftUp(){
        let curIdx = this._size() - 1;
        while(curIdx > 0 && this._comparator(this._queue[curIdx], this._queue[this._getParent(curIdx)])){
            this._swap(curIdx, this._getParent(curIdx));
            curIdx = this._getParent(curIdx);
        }
    }

    _siftDown(){
        let curIdx = 0;
        let leftIdx = this._getLeftChild(curIdx);
        let rightIdx = this._getRightChild(curIdx);
        //compare it with children, if it doesn't meet comparator condition, perform swap
        //CONTINUE HERE
    }

    _swap(idx1, idx2){
        let temp = this._queue[idx1];
        this._queue[idx1] = this._queue[idx2];
        this._queue[idx2] = temp;
    }
}

const mf = new MedianFinder();

const max = new PriorityQueue();
max.push(5);
max.push(7);
// max.push(20);
max.push(1);
max.push(50);
console.log(max._queue)