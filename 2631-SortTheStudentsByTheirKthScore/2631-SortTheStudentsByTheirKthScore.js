// Last updated: 24/07/2026, 23:48:03
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (arr, k) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j][k] < arr[j+1][k]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    return arr
};