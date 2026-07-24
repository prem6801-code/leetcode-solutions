// Last updated: 24/07/2026, 23:54:16
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = new Set();
    let col = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                row.add(i);
                col.add(j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (row.has(i)) matrix[i][j] = 0
            if (col.has(j)) matrix[i][j] = 0
        }
    }
};