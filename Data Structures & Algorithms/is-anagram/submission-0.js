class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        //this maps the value key count
        const map = new Map();
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        // need to decrease if in t there exists
        for (const char of t){
            map.set(char, (map.get(char) || 0) - 1);
            if(map.get(char) < 0){
                return false
            }
        }
        return true
    }
}
