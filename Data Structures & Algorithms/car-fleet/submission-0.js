class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];
        let fleets = 0;
        const indexes = Array.from({ length: position.length }, (_, i) => i);
        indexes.sort((a, b) => position[b] - position[a]);
        for (const i of indexes) {
            const time = (target - position[i]) / speed[i];
            if (stack.length === 0) {
                stack.push(time);
                fleets++;
            } else if (time > stack[stack.length - 1]) {
                stack.push(time);
                fleets++;
            }
        }
        return fleets;
    }
}
