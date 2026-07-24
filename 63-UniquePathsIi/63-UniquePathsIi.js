// Last updated: 24/07/2026, 23:54:25
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1))
    let findPath = (i, j) => {
        if (i >= m || j >= n || obstacleGrid[i][j] == 1) return 0;
        if (i == m - 1 && j == n - 1) {
            return 1;
        }
        if (dp[i][j] !== -1) {
            return dp[i][j]
        }
        let right = findPath(i + 1, j);
        let down = findPath(i, j + 1);
        return dp[i][j] = right + down;

    }
    return findPath(0, 0)
};