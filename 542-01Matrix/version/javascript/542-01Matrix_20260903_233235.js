// Last updated: 03/09/2026, 23:32:35
1/**
2 * @param {number[][]} mat
3 * @return {number[][]}
4 */
5var updateMatrix = function (mat) {
6    let queue = []
7    let m = mat.length, n = mat[0].length;
8    let newMat = Array.from({ length: m }, () => new Array(n).fill(Infinity));
9    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
10    for (let i = 0; i < m; i++) {
11        for (let j = 0; j < n; j++) {
12            if (mat[i][j] == 0) {
13                newMat[i][j] = 0
14                queue.push([i, j, 0])
15            }
16        }
17    }
18    let front = 0;
19    while (front < queue.length) {
20        let [x, y, dist] = queue[front++];
21        for (let [d1, d2] of dirs) {
22            let newX = x + d1, newY = y + d2;
23            if (!(newX < 0 || newY < 0 || newX >= m || newY >= n || newMat[newX][newY] !== Infinity)) {
24                newMat[newX][newY] = dist + 1
25                queue.push([newX, newY, dist + 1])
26            }
27        }
28    }
29
30    return newMat
31};