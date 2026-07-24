// Last updated: 24/07/2026, 23:54:19
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (len) {
    let dp = new Array(len)
    let findWays = (n) => {
        if (n <= 0 || n == 1) return 1;
        if (dp[n] !== undefined) return dp[n];
        return dp[n] = findWays(n - 1) + findWays(n - 2)
    }
    return findWays(len)
};