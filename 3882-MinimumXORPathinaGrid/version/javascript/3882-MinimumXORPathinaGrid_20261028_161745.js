// Last updated: 28/10/2026, 16:17:45
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var minCost = function (grid) {
6
7    let dp = Array.from({ length: grid.length }, () =>
8        Array.from({ length: grid[0].length }, () => new Array(1024).fill(-1))
9    );
10
11    let dfs = (i, j, xor) => {
12        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
13            return Infinity
14        }
15        if (i == grid.length - 1 && j == grid[0].length - 1) {
16            return xor ^ grid[i][j]
17        }
18
19        if (dp[i][j][xor] !== -1) {
20            return dp[i][j][xor]
21        }
22
23        return dp[i][j][xor] = Math.min(dfs(i + 1, j, grid[i][j] ^ xor), dfs(i, j + 1, grid[i][j] ^ xor))
24    }
25
26    return dfs(0, 0, 0)
27};