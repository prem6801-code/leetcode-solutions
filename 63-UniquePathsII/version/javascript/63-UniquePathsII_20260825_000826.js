// Last updated: 25/08/2026, 00:08:26
1/**
2 * @param {number[][]} obstacleGrid
3 * @return {number}
4 */
5var uniquePathsWithObstacles = function (obstacleGrid) {
6    let m = obstacleGrid.length;
7    let n = obstacleGrid[0].length
8    let dp = Array.from({ length: m }, () => new Array(n))
9    let dfs = (i, j) => {
10        if (i >= m || j >= n || obstacleGrid[i][j] == 1) {
11            return 0
12        }
13
14        if (dp[i][j] !== undefined) {
15            return dp[i][j]
16        }
17
18        if (i == m - 1 && j == n - 1) {
19            return 1
20        }
21
22        return dp[i][j] = dfs(i + 1, j) + dfs(i, j + 1)
23    }
24
25    return dfs(0, 0)
26};