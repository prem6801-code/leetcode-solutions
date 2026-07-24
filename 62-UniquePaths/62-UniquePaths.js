// Last updated: 24/07/2026, 23:54:28
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var uniquePaths = function (m, n) {

    let arr = Array.from({ length: m }, () => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
    }
    // console.log(arr)
    return arr[m - 1][n - 1]
};

// var uniquePaths = function (m, n) {
//     let dp = {}
//     let arr = Array.from({ length: m }, () => new Array(n).fill(-1))
//     // console.log(arr)
//     let findPath = (i, j) => {
//         if (i < 0 || j < 0 || i >= m || j >= n) {
//             return 0;
//         }

//         if (i == m - 1 && j == n - 1) {
//             return 1
//         }
//         // let key = `${i}-${j}`
//         // if (key in dp) {
//         //     return dp[key];
//         // }
//         if (arr[i][j] !== -1) {
//             return arr[i][j]
//         }
//         let right = findPath(i, j + 1)
//         let down = findPath(i + 1, j)

//         return arr[i][j] = right + down;

//     }
//     // console.log(dp)
//     return findPath(0, 0)
// };


//  var uniquePaths = function (m, n) {
//     let dirs = [[0, 1], [1, 0]];
//     let count = 0;
//     let findPath = (i, j) => {
//         if (i == m - 1 && j == n - 1) {
//             count = count + 1
//             return
//         }
//         if (i < 0 || j < 0 || i >= m || j >= n) {
//             return;
//         }
//         for (let [x, y] of dirs) {
//             findPath(i + x, j + y)
//         }
//     }
//     findPath(0, 0)
//     return count;
// };