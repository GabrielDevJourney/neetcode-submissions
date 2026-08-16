class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const digit = board[r][c];
                if (digit === ".") continue;

                let rowKey = `row-${r}-${digit}`;

                let colKey = `col-${c}-${digit}`;

                let rowBand = Math.floor(r / 3);
                let colBand = Math.floor(c / 3);
                let boxKey = `box-${rowBand}-${colBand}-${digit}`;

                if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)) return false;

                set.add(rowKey, digit);
                set.add(colKey, digit);
                set.add(boxKey, digit);
            }
        }
        return true;
    }
}
