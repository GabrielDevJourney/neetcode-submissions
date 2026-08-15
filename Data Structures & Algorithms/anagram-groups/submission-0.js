class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(let i = 0; i < strs.length; i ++){
            const wordSorted = strs[i].split("").sort().join("")
            const array = map.get(wordSorted) || []
            array.push(strs[i])
            map.set(wordSorted, array)
        }
        return Array.from(map.values())
    }
}
