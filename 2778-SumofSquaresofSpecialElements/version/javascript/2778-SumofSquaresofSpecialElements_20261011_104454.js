// Last updated: 11/10/2026, 10:44:54
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var sumOfSquares = function (nums) {
6    let res = 0;
7    for (let i = 0; i < nums.length; i++) {
8        if (nums.length % (i + 1) == 0) res += nums[i] ** 2
9    }
10    return res
11};