// Last updated: 24/07/2026, 23:47:59
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let result = []
    let max = -Infinity

    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) count++;
        }
        if (count > max) {
            max = count
            result[0] = i;
            result[1] = count;
        }
    }
    return result;
};