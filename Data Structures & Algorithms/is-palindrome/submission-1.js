class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLocaleLowerCase();
        let left = 0
        let right = string.length-1

        while(left<right){
            if(!(string[left] === string[right])){
                return false
            }
            left ++
            right --
        }
        return true
    }
}
