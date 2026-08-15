class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i=0; i < nums.length; i++){
            const pairNum = target - nums[i]
            if(map.has(pairNum)){
                return [map.get(pairNum),i]
            }
            map.set(nums[i], i)
        }
    }
}
