// Last updated: 24/07/2026, 23:53:26
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let dp = Array.from({ length: triangle.length }, (_, i) => new Array(triangle[i].length))
    let findPath = (i, j) => {
        if (i >= triangle.length || j >= triangle[i].length) {
            return 0
        }
        if (dp[i][j] !== undefined) {
            return dp[i][j]
        }

        return dp[i][j] = Math.min(triangle[i][j] + findPath(i + 1, j), triangle[i][j] + findPath(i + 1, j + 1))
    }
    return findPath(0, 0);
};