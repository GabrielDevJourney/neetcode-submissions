class MinStack {
    constructor() {
        this.items = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.items.length === 0) {
            return null;
        }

        this.minStack.pop();
        return this.items.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.items.length === 0) {
            return null;
        }

        return this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }
}
