class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const counts = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            counts[s1.charCodeAt(i) - 97]++;
            counts[s2.charCodeAt(i) - 97]--;
        }
        if (counts.every((c) => c === 0)) return true;

        for (let i = s1.length; i < s2.length; i++) {
            counts[s2.charCodeAt(i - s1.length) - 97]++;

            counts[s2.charCodeAt(i) - 97]--;

            if (counts.every((c) => c === 0)) return true;
        }

        return false;
    }
}
