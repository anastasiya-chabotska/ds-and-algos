class PriorityQueue{
    //max heap, a < b would be min heap
    constructor(comparator = (a, b)=> a > b){
        //underscore means private, it should only be used by the class
        this._heap = [];
        this._comparator = comparator;

    }

    size(){
        return this._heap.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    peek(){
        return this._heap[0];
    }

    push(val){
        let index = this._heap.push(val) - 1;
        let parent = this._parent(index);
        while(!this._compare(parent, index) && parent >=0){
            console.log({parent, index})
            this._swap(index, parent);
            index = parent;
            parent = this._parent(index);
        }
        console.log(this._heap)
    }

    _parent(idx){
        return Math.floor((idx - 1)/2);
    }

    _leftChild(idx){
        return idx * 2 + 1;
    }

    _rightChild(idx){
        return idx * 2 + 2;
    }

    _swap(i, j){
        const temp = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = temp;
    }

    _compare(i, j){
        return this._comparator(this._heap[i], this._heap[j])
    }
}


let heap = new PriorityQueue();
heap.push(5);
heap.push(10)
heap.push(20)
heap.push(45)
