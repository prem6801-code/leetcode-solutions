// Last updated: 01/08/2026, 15:45:47
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var predictTheWinner = function (nums) {
6    let dp = Array.from({ length: nums.length }, () => new Array(nums.length))
7    let findWinner = (i, j) => {
8        if (i === j) {
9            return nums[i];
10        }
11        if (dp[i][j] !== undefined) {
12            return dp[i][j]
13        }
14        let takeLeft = nums[i] - findWinner(i + 1, j);
15        let takeRight = nums[j] - findWinner(i, j - 1);
16
17        return dp[i][j] = Math.max(takeLeft, takeRight);
18    }
19    return findWinner(0, nums.length - 1) >= 0
20};