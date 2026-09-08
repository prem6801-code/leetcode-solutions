// Last updated: 08/09/2026, 23:01:07
1/**
2 * @param {number} n
3 * @return {string[][]}
4 */
5var solveNQueens = function (n) {
6    let grid = Array.from({ length: n }, () => new Array(n).fill("."))
7    let rowSet = new Array(n).fill(0)
8    let colSet = new Array(n).fill(0)
9
10    let dirs = [[-1, -1], [1, 1], [-1, 1], [1, -1]]
11    let isQueenPresent = (d1, d2) => {
12        if (rowSet[d1] == 1 || colSet[d2] == 1) return true
13        for (let [x, y] of dirs) {
14            let newX = d1 + x;
15            let newY = d2 + y;
16
17            while (newX >= 0 && newY >= 0 && newX < n && newY < n) {
18                if (grid[newX][newY] == "Q") {
19                    return true;
20                }
21                newX += x;
22                newY += y;
23            }
24        }
25        return false
26    }
27    let ans = []
28
29    let queensPlaced = () => {
30        return rowSet.filter((item) => item == 1).length;
31    }
32
33    let solve = (i) => {
34        for (let row = 0; row < n; row++) {
35            if (isQueenPresent(i, row)) continue
36            grid[i][row] = "Q"
37            rowSet[i] = 1
38            colSet[row] = 1
39            if (queensPlaced() == n) {
40                ans.push(grid.map(row => row.join("")))
41            }
42            solve(i + 1);
43            grid[i][row] = "."
44            rowSet[i] = 0
45            colSet[row] = 0
46        }
47    }
48    solve(0)
49    // console.log(ans)
50    return ans
51};