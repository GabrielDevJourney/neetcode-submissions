class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const need = new Map();

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        const window = new Map();

        let have = 0;
        const needed = need.size;

        let left = 0;
        let bestLen = Infinity;
        let bestStart = 0;

        for (let right = 0; right < s.length; right++) {
            const c = s[right];
            if (need.has(c)) {
                window.set(c, (window.get(c) || 0) + 1);
                if (window.get(c) === need.get(c)) {
                    have++;
                }
            }
            while (have === needed) {
                if (right - left + 1 < bestLen) {
                    bestLen = right - left + 1;
                    bestStart = left;
                }

                let leftChar = s[left];
                if (need.has(leftChar)) {
                    window.set(leftChar, (window.get(leftChar) || 0) - 1);
                    if (window.get(leftChar) < need.get(leftChar)) {
                        have--;
                    }
                }
                left++;
            }
        }

        return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
    }
}
