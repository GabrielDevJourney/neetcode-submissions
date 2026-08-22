class MinStack {
    constructor() {
        this.items = [];
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);

        if (this.min || this.min === 0) {
            if (this.min > val) {
                this.min = val;
            }
        } else if (!this.min) {
            this.min = val;
        }
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.items[this.items.length - 1] === this.min) {
            this.min = null;
            this.items.pop();
            for (const num of this.items) {
                if (this.min !== 0 && !this.min) {
                    this.min = num;
                } else if (this.min > num) {
                    this.min = num;
                }
            }
        } else {
            this.items.pop();
        }
        return null;
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
        return this.min;
    }
}
