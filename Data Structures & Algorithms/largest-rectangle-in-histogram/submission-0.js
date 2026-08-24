class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            const currentHeight = i === heights.length ? 0 : heights[i];

            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                const oldIndex = stack.pop();
                const height = heights[oldIndex];

                let width;

                if (stack.length === 0) {
                    width = i;
                } else {
                    width = i - stack[stack.length - 1] - 1;
                }

                const area = height * width;
                maxArea = Math.max(maxArea, area);
            }
            if (i < heights.length) {
                stack.push(i);
            }
        }

        return maxArea;
    }
}
