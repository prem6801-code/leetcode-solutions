// Last updated: 13/09/2026, 12:27:06
1/**
2 * @param {character[][]} board
3 * @return {boolean}
4 */
5var isValidSudoku = function (board) {
6    let colSet = Array.from({ length: 9 }, () => new Set());
7    let rowSet = Array.from({ length: 9 }, () => new Set());
8    let gridSet = Array.from({ length: 9 }, () => new Set());
9
10    for (let i = 0; i < board.length; i++) {
11        for (let j = 0; j < board[i].length; j++) {
12            let num = board[i][j]
13            if (num == ".") continue;
14            let row = Math.floor(i / 3);
15            let col = Math.floor(j / 3);
16            if (colSet[j].has(num) || rowSet[i].has(num) || gridSet[(row * 3) + col].has(num)) {
17                return false
18            }
19
20            colSet[j].add(num);
21            rowSet[i].add(num);
22            gridSet[(row * 3) + col].add(num)
23        }
24    }
25    return true;
26};