class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(this.length == 0){
            this.last = newNode;
            this.first = newNode;
        }
        else{
        this.last.next = newNode;
        this.last = newNode;
        }

        this.length++;
        return newNode;

    }
    dequeue(){

        if(!this.first) return null;

        let nodeToDeque = this.first;
        this.first = this.first.next;
        this.length--;

        if(this.length === 0){
            this.last = this.first
        }
        return nodeToDeque;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  
  
  myQueue.enqueue("Joy");
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.enqueue("Samir")
  console.log(myQueue);
  myQueue.dequeue()
  myQueue.dequeue()
  myQueue.dequeue()

  console.log(myQueue)

  //Joy
  //Matt
  //Pavel
  //Samir