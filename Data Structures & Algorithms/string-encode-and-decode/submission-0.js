class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(let string of strs){
            result += string.length + '#' + string
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0
        while (i < str.length){
            let hashIndex = str.indexOf('#',i)
            let lenghtText = str.slice(i, hashIndex)
            let num = Number(lenghtText)
            let word = str.slice(hashIndex + 1, hashIndex + 1 + num)
            result.push(word)
            i = hashIndex + 1 + num
        }
        return result
    }
}
