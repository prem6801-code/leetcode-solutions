// Last updated: 24/07/2026, 23:54:14
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {


    let mid;
    let start = 0
    let m = matrix.length;
    let n = matrix[0].length;
    let end = (m * n) - 1;

    while (start <= end ) {
        mid = Math.floor((start + end) / 2);
        // console.log(matrix[Math.floor(mid / m)], Math.floor(mid / m), mid % n)
        if (matrix[Math.floor(mid / n)][mid % n] == target) {
            return true;
        } else if (matrix[Math.floor(mid / n)][mid % n] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}