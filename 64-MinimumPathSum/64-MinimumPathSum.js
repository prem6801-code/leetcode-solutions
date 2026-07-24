// Last updated: 24/07/2026, 23:54:26
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length
    let dp = Array.from({ length: m }, () => new Array(n + 1));
    let solve = (i, j) => {
        if (i >= m || j >= n) {
            return Infinity;
        }
        if (i == m - 1 && j == n - 1) {
            return grid[i][j]
        }
        if (dp[i][j] !== undefined) {
            return dp[i][j]
        }

        let right = grid[i][j] + solve(i, j + 1);
        let down = grid[i][j] + solve(i + 1, j);
        return dp[i][j] = Math.min(right, down);
    }
    return solve(0, 0);
};
