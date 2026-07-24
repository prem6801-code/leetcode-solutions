// Last updated: 24/07/2026, 23:49:23
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let m = grid.length, n = grid[0].length
    for (k; k > 0; k--) {
        let temp = grid[m-1][n - 1]
        for (let i = grid.length - 1; i >= 0; i--) {
            for (let j = grid[i].length - 1; j >= 0; j--) {
                if (i == 0 && j == 0) break;
                if (j == 0) {
                    grid[i][j] = grid[i - 1][n - 1]
                } else {
                    grid[i][j] = grid[i][j - 1]
                }
            }
        }
        grid[0][0] = temp;
    }
    return grid
};