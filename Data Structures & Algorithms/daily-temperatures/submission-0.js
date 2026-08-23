class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    dailyTemperatures(temperatures) {
        let stack = [];
        const result = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length != 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let oldIndex = stack[stack.length - 1];
                stack.pop();
                result[oldIndex] = i - oldIndex;
            }
             stack.push(i);
        }
        return result;
    }
}
