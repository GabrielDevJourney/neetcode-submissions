class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length
        const n = matrix[0].length
        let left  = 0
        let right = matrix.length * matrix[0].length - 1
        while (left <= right){
            let mid = Math.floor((left + right) / 2)
            let row = Math.floor(mid/n)
            let col = mid%n

            if(matrix[row][col] === target){
                return true
            }

            if(matrix[row][col] > target){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        return false
    }
}
