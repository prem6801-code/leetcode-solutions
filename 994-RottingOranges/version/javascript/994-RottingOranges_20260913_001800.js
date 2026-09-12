// Last updated: 13/09/2026, 00:18:00
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var orangesRotting = function (grid) {
6    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
7    let queue = [];
8    let oranges = 0;
9    for (let i = 0; i < grid.length; i++) {
10        for (let j = 0; j < grid[i].length; j++) {
11            if (grid[i][j] == 2) {
12                queue.push([i, j, 0])
13                grid[i][j] == 2
14            } else if (grid[i][j] == 1) {
15                oranges++
16            }
17        }
18    }
19    let rottenOranges = 0
20    let maxtime = 0
21
22    while (queue.length) {
23        let [i, j, time] = queue.shift();
24        for (let [x, y] of dirs) {
25            let dx = i + x, dy = j + y;
26            if (!(dx < 0 || dy < 0 || dx >= grid.length || dy >= grid[0].length || grid[dx][dy] == 0 || grid[dx][dy] == 2)) {
27                maxtime = Math.max(maxtime, time + 1)
28                rottenOranges++
29                queue.push([dx, dy, time + 1])
30                grid[dx][dy] = 2
31            }
32        }
33    }
34    return oranges == rottenOranges ? maxtime : -1
35};