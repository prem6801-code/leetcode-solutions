// Last updated: 27/10/2026, 14:31:37
1/**
2 * @param {number} m
3 * @param {number} n
4 * @return {string[]}
5 */
6
7var createGrid = function (m, n) {
8    let grid = Array.from({ length: m }, () => new Array(n).fill("#"))
9    for (let i = 0; i < m; i++) {
10        for (let j = 0; j < n; j++) {
11            if (i == 0 || j == n - 1) {
12                grid[i][j] = "."
13            }
14        }
15    }
16    return grid.map((item) => item.join(""))
17};