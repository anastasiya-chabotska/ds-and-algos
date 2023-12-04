class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    push(x) {
        this.pushStack.push(x);
    }

    pop() {

        if (this.popStack.length == 0) {

            while (this.pushStack.length) {
                let top = this.pushStack.pop();
                this.popStack.push(top);
            }

        }

        return this.popStack.pop();

    }

    peek() {
        if (this.popStack.length == 0) {

            while (this.pushStack.length) {
                let top = this.pushStack.pop();
                this.popStack.push(top);
            }

        }

        return this.popStack[this.popStack.length - 1];
    }

    empty() {
        return (this.pushStack.length == 0 && this.popStack.length == 0)
    }
}