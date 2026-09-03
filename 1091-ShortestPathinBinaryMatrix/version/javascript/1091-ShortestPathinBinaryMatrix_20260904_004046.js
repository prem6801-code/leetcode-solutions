// Last updated: 04/09/2026, 00:40:46
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var shortestPathBinaryMatrix = function (grid) {
6    let dirs = [[0, 1], [1, 0], [1, 1], [1, -1], [0, -1], [-1, 0], [-1, -1], [-1, 1]];
7    let m = grid.length;
8    let n = grid[0].length;
9    let queue = 0
10    if (m == 1 && n == 1 && grid[0][0] == 0) return 1
11
12    if (grid[0][0] == 0) {
13        grid[0][0] = 1
14        queue = [[0, 0, 1]];
15    }
16    while (queue.length) {
17        let [x, y, dist] = queue.shift();
18        for (let [d1, d2] of dirs) {
19            let newX = x + d1, newY = y + d2;
20            if (!(newX < 0 || newY < 0 || newX >= m || newY >= n || grid[newX][newY] !== 0)) {
21                if (newX == m - 1 && newY == n - 1) {
22                    return dist + 1
23                }
24                grid[newX][newY] = dist + 1
25                queue.push([newX, newY, dist + 1])
26            }
27        }
28    }
29
30    return -1
31};