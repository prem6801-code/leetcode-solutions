// Last updated: 24/08/2026, 23:38:24
1/**
2 * @param {number} m
3 * @param {number} n
4 * @return {number}
5 */
6
7
8var uniquePaths = function (m, n) {
9    let dp = Array.from({ length: m }, () => new Array(n))
10    let dfs = (i, j) => {
11        if (i >= m || j >= n) {
12            return 0
13        }
14
15        if (dp[i][j] !== undefined) {
16            return dp[i][j]
17        }
18
19        if (i == m - 1 && j == n - 1) {
20            return 1;
21        }
22
23        return dp[i][j] = dfs(i + 1, j) + dfs(i, j + 1)
24    }
25    return dfs(0, 0)
26};