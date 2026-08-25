// Last updated: 26/08/2026, 01:01:56
1/**
2 * @param {number[][]} matrix
3 * @param {number} target
4 * @return {boolean}
5 */
6var searchMatrix = function (matrix, target) {
7    let start = 0;
8    let end = matrix.length * matrix[0].length - 1
9
10    while (start <= end) {
11        mid = Math.floor((start + end) / 2);
12        let x = Math.floor(mid / matrix[0].length);
13        let y = mid % matrix[0].length
14        if (matrix[x][y] == target) {
15            return true
16        } else if (matrix[x][y] > target) {
17            end = mid - 1;
18        } else {
19            start = mid + 1
20        }
21    }
22    return false;
23};