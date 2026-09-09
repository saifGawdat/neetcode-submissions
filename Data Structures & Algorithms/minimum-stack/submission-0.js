class MinStack {
    arr;
    minStack;

    constructor() {
        this.arr = [];
        this.minStack = [];
    }

    push(val) {
        this.arr.push(val);

        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    pop() {
        const removed = this.arr.pop();

        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
