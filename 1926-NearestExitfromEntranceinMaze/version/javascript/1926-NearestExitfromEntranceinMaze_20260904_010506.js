// Last updated: 04/09/2026, 01:05:06
1/**
2 * @param {character[][]} maze
3 * @param {number[]} entrance
4 * @return {number}
5 */
6var nearestExit = function (maze, entrance) {
7    let m = maze.length;
8    let n = maze[0].length;
9    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
10    maze[entrance[0]][entrance[1]] = "+"
11    let queue = [[...entrance, 0]]
12    while (queue.length) {
13        let [x, y, dist] = queue.shift();
14        for (let [d1, d2] of dirs) {
15            let newX = x + d1, newY = y + d2;
16            if (!(newX < 0 || newY < 0 || newX >= m || newY >= n || maze[newX][newY] == "+")) {
17                if ((newX == 0 || newY == 0 || newX == m - 1 || newY == n - 1)) {
18                    return dist + 1
19                }
20                maze[newX][newY] = "+"
21                queue.push([newX, newY, dist + 1])
22            }
23        }
24    }
25
26    return -1;
27};