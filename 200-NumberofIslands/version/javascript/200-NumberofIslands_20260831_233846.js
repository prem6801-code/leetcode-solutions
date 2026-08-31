// Last updated: 31/08/2026, 23:38:46
1/**
2 * @param {character[][]} grid
3 * @return {number}
4 */
5var numIslands = function (grid) {
6    let m = grid.length;
7    let n = grid[0].length;
8    let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
9    let res = 0
10    let dfs = (i, j) => {
11        grid[i][j] = 0
12        for (let [x, y] of dirs) {
13            let d1 = i + x, d2 = j + y;
14            if (!(d1 < 0 || d2 < 0 || d1 >= m || d2 >= n || grid[d1][d2] == 0)) {
15                dfs(d1, d2)
16            }
17        }
18    }
19
20    for (let i = 0; i < grid.length; i++) {
21        for (let j = 0; j < grid[i].length; j++) {
22            if (grid[i][j] == 1) {
23                res++;
24                dfs(i, j)
25            }
26        }
27    }
28
29    return res;
30};