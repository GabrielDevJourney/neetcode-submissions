class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s
            .replace(/[^a-zA-Z0-9]/g, "")
            .trim(" ")
            .toLocaleLowerCase();
        const array = string.split("");
        const arrayLenght = array.length - 1;
        for (let i = 0; i < array.length; i++) {
            if (!(array[i] === array[arrayLenght - i])) {
                return false;
            }
        }
        return true;
    }
}
