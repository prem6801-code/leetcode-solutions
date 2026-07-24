// Last updated: 24/07/2026, 23:54:43
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


//1 4 7
//2 5 8
//3 6 9

var rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};