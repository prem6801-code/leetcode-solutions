// Last updated: 24/07/2026, 23:47:17
/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach = function (start, target) {
    let m = 8, n = 8;
    let visited = Array.from({ length: m }, () => new Array(n).fill(-1))
    let dirs = [[2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-1, 2], [-2, -1], [-1, -2]]
    let findPath = (i, j, move) => {
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] == -1) {
            return false;
        }
        if (i == target[0] && j == target[1]) {
            return move % 2 == 0;
        }
        if (move >= 6) {
            return false;
        }
        visited[i][j] = -1
        for (let [d1, d2] of dirs) {
            let X = i + d1, Y = j + d2;
            if (findPath(X, Y, move + 1)) {
                return true;
            }
        }
        visited[i][j] = 0
        return false;
    }

    //bfs solution
    if ((start[0] == target[0]) && (start[1] == target[1])) return true;
    let queue = [];
    queue.push(start)
    visited[start[0]][start[1]] = 0
    let move = 0;
    while (queue.length) {
        let [i, j] = queue.shift();
        for (let [d1, d2] of dirs) {
            let X = i + d1, Y = j + d2;
            if (!(X < 0 || Y < 0 || X >= m || Y >= n || visited[X][Y] !== -1)) {
                visited[X][Y] = visited[i][j] + 1
                if (X == target[0] && Y == target[1]) {
                    return visited[X][Y] % 2 == 0
                }
                queue.push([X, Y])
            }
        }
    }
    return false
};