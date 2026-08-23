class Solution {
    carFleet(target, position, speed) {
        const stack = [];

        const indexes = Array.from(
            { length: position.length },
            (_, i) => i
        );

        indexes.sort((a, b) => position[b] - position[a]);

        for (const i of indexes) {
            const time = (target - position[i]) / speed[i];

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}