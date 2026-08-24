// Last updated: 24/08/2026, 23:48:34
1/**
2 * @param {number} m
3 * @param {number} n
4 * @return {number}
5 */
6
7
8var uniquePaths = function (m, n) {
9    let dp = Array.from({ length: m }, () => new Array(n).fill(1))
10    for (let i = 1; i < dp.length; i++) {
11        for (let j = 1; j < dp[i].length; j++) {
12            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
13        }
14    }
15    return dp[m-1][n-1]
16};