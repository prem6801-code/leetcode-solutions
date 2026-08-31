// Last updated: 01/09/2026, 00:11:23
1/**
2 * @param {number[][]} grid
3 * @return {number}
4 */
5var countServers = function (grid) {
6    let rowCt = new Array(grid.length).fill(0);
7    let colCount = new Array(grid[0].length).fill(0);
8
9    for (let i = 0; i < grid.length; i++) {
10        for (let j = 0; j < grid[i].length; j++) {
11            if (grid[i][j] == 1) {
12                rowCt[i]++;
13                colCount[j]++;
14            }
15        }
16    }
17    let res = 0;
18    for (let i = 0; i < grid.length; i++) {
19        for (let j = 0; j < grid[i].length; j++) {
20            if (grid[i][j] == 1 && (rowCt[i] > 1 || colCount[j] > 1)) {
21                res++;
22            }
23        }
24    }
25    return res
26};