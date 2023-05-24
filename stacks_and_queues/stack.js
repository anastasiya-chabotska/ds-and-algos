class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        if(this.length == 0) this.bottom = newNode;
        this.length++;
      
    
    }
    pop(){
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