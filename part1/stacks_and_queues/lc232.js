
class MyQueue{

    constructor(){
        this.pushStack = [];
        this.popStack = [];
    }


    push(value){

        this.pushStack.push(value);

    }

    pop(){

        if(this.popStack.length === 0){
            while(this.pushStack.length > 0){
                this.popStack.push(this.pushStack.pop())
            }
        }

        return this.popStack.pop();

    }

    peek(){

        if(this.popStack.length === 0){
            while(this.pushStack.length > 0){
                this.popStack.push(this.pushStack.pop())
            }
        }

        return this.popStack[this.popStack.length - 1];

    }

    empty(){

        // if(this.popStack.length === 0 && this.pushStack.length === 0)
        // return true;
        // else return false;

        //one liner 
        return this.popStack.length === 0 && this.pushStack.length === 0;

    }

}


let myQueue = new MyQueue();
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)
console.log(myQueue.pop());
console.log(myQueue.empty())