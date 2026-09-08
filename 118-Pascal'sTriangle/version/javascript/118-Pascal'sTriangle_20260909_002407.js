// Last updated: 09/09/2026, 00:24:07
1/**
2 * @param {number} numRows
3 * @return {number[][]}
4 */
5var generate = function (numRows) {
6    let ans = [[1]];
7    for (let i = 0; i < numRows - 1; i++) {
8        let prev = ans[ans.length - 1];
9        let temp = [];
10        for (let j = 0; j <= prev.length; j++) {
11            temp[j] = (prev[j - 1] || 0) + (prev[j] || 0)
12        }
13        ans.push(temp)
14    }
15    return ans
16};