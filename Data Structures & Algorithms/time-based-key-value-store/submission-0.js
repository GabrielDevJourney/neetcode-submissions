class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const array = this.keyStore.get(key) || [];
        array.push([timestamp, value]);
        this.keyStore.set(key, array);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }
        const pairs = this.keyStore.get(key);
        let left = 0;
        let right = pairs.length - 1;
        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(pairs[mid][0] <= timestamp){
                result = pairs[mid][1]
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return result
    }
}
