// Last updated: 24/07/2026, 23:54:37
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;

    let result = [];
    
    while (top <= bottom && left <= right) {
        
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;

        
        for (let j = top; j <= bottom; j++) {
            result.push(matrix[j][right]);
        }
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let j = bottom; j >= top; j--) {
                result.push(matrix[j][left]);
            }
            left++;
        }
    }

    return result;
};
