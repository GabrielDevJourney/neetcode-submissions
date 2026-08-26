class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;

        while(left <= right){
            let mid = Math.trunc(left + (right - left) / 2);
            let val = matrix[Math.trunc(mid/cols)][mid%cols];

            if(val === target){
                return true;
            }else if(val > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return false;
    }
}
