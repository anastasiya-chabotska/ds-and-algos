class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.stack = []
    }
    peek() {
      return this.stack[this.stack.length - 1];
    }
    push(value){
      this.stack.push(value);
    }
    pop(){
      this.stack.pop();
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  console.log(myStack)
  
  
  //Discord
  //Udemy
  //google



  