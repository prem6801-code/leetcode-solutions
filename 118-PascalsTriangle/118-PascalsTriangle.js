// Last updated: 24/07/2026, 23:53:31
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = Array.from({ length: numRows }, () => [])
    arr[0][0] = 1
    // console.log(arr)
    for (let i = 1; i < arr.length; i++) {
        // let prev = arr[i - 1] || []
        for (let j = 0; j <= i; j++) {
            arr[i][j] = (arr[i-1][j - 1] || 0) + (arr[i-1][j] || 0)
        }
    }
    return arr
};