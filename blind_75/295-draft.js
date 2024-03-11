class MedianFinder {
    constructor() {
        this.medianTree = new Tree();
    }

    addNum(num) {
        this.medianTree.insert(num);
    }

    findMedian(){
        const arr = this.medianTree.traverse()
        console.log(arr);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return newNode;
        } else {
            let curNode = this.root;
            while (curNode) {
                //left subtree
                if (val < curNode.val) {
                    if (curNode.leftChild) {
                        curNode = curNode.leftChild;
                    }
                    else {
                        curNode.leftChild = newNode;
                        return newNode;
                    }
                }
                else {
                    if (curNode.rightChild) {
                        curNode = curNode.rightChild;
                    }
                    else {
                        curNode.rightChild = newNode;
                        return newNode;
                    }
                }
            }
        }
    }

    traverse(curNode = this.root, res = []){
        if(curNode==null) return res;
        this.traverse(curNode.leftChild, res);
        res.push(curNode.val);
        this.traverse(curNode.rightChild, res);
        return res;

    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}



let mf = new MedianFinder();

mf.addNum(1);
mf.addNum(5);
mf.addNum(2);
mf.addNum(4);
mf.addNum(3);

mf.findMedian()

console.log(JSON.stringify(mf))
