// Last updated: 24/07/2026, 23:53:30
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let matrix = []
    for (let i = 0; i <=rowIndex; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                matrix[i] ? matrix[i][j] = 1 : matrix[i] = [1]
            } else {
                matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j]
            }
        }
    }
    return matrix[matrix.length-1]
};