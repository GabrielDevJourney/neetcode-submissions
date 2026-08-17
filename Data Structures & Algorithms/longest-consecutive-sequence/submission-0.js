class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longestSequence = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let currentNumber;
                let currentLength = 1;
                currentNumber = num;
                while (set.has(currentNumber + 1)) {
                    currentLength++;
                    currentNumber++;
                }

                longestSequence = Math.max(longestSequence, currentLength);
            }
        }
        return longestSequence;
    }
}
