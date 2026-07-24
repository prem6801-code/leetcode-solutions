// Last updated: 24/07/2026, 23:52:31
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let count = 0;
    let queue = [];
    let findIsland = (i, j) => {
        queue.push([i, j])
        grid[i][j] = "0"
        while (queue.length) {
            let [x, y] = queue.shift();
            for (let [d1, d2] of dirs) {
                let newX = x + d1, newY = y + d2
                if (!(newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[i].length) && grid[newX][newY] !== "0") {
                    queue.push([newX, newY])
                    grid[newX][newY] = "0"
                }
            }
            // console.log(queue)
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                count++;
                findIsland(i, j)
                // console.log(i, j, grid)
            }
        }
    }

    return count;
};