// Last updated: 24/07/2026, 23:49:58
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let queue = [];
    let m = grid.length, n = grid[0].length;
    let freshOranges = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            } else if (grid[i][j] == 1) {
                freshOranges++
            }
        }
    }
    let maxTime = 0;
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let timeArr = Array.from({ length: m }, () => new Array(n).fill(0));
    let rottingCount = 0;
    while (queue.length) {
        let [x, y] = queue.shift();
        for (let [d1, d2] of dirs) {
            let X = x + d1, Y = y + d2;
            let time = timeArr[x][y]
            if (!(X < 0 || Y < 0 || X >= m || Y >= n || grid[X][Y] == 0 || grid[X][Y] == 2)) {
                grid[X][Y] = 2;
                timeArr[X][Y] = time + 1
                maxTime = Math.max(maxTime, time + 1)
                rottingCount++;
                queue.push([X, Y])
            }
        }
    }
    if(rottingCount !==freshOranges) return -1
    return maxTime;
};