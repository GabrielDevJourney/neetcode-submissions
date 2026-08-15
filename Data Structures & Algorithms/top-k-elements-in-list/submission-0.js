class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1);
        }
        const values = Array.from(map).sort((a,b) => b[1] - a[1]).slice(0,k).map((pair) => pair[0])
        return values
    }
}
