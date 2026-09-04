// Last updated: 04/09/2026, 23:53:31
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var numEnclaves = function (grid) {
6    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
7    let queue = [];
8    let m = grid.length;
9    let n = grid[0].length;
10
11    for (let i = 0; i < m; i++) {
12        for (let j = 0; j < n; j++) {
13            if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && grid[i][j] == 1) {
14                grid[i][j] = 0
15                queue.push([i, j])
16            }
17        }
18    }
19    // console.log(queue)
20    while (queue.length) {
21        let [x, y] = queue.shift();
22        for (let [d1, d2] of dirs) {
23            let newX = d1 + x, newY = d2 + y;
24            if (!(newX < 0 || newY < 0 || newX >= m || newY >= n || grid[newX][newY] == 0)) {
25                grid[newX][newY] = 0
26                queue.push([newX, newY])
27            }
28        }
29    }
30    let res = 0
31    for (let i = 0; i < m; i++) {
32        for (let j = 0; j < n; j++) {
33            if (grid[i][j] == 1) {
34                res++;
35            }
36        }
37    }
38    return res
39};