class Solution {
    hoursNeeded(piles, k) {
        let total = 0;

        for (const pile of piles) {
            total += Math.ceil(pile / k);
        }

        return total;
    }

    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let bestSpeed = right;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const hours = this.hoursNeeded(piles, mid);

            if (hours <= h) {
                bestSpeed = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return bestSpeed;
    }
}