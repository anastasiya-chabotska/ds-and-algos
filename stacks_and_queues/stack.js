class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    }
    else {

      newNode.next = this.top;
      this.top = newNode;

    }
    this.length++;


  }
  pop() {

    if(!this.top) return null;
    if(this.top === this.bottom){
      this.bottom = null;
    }

    let nodeToBePopped = this.top;
    this.top = this.top.next;
    this.length--;
    return nodeToBePopped;
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push("Discord");
myStack.push("Udemy")
myStack.push("google")
console.log("hi", myStack);



  //Discord
  //Udemy
  //google