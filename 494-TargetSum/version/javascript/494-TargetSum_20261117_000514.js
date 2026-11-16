// Last updated: 17/11/2026, 00:05:14
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var findTargetSumWays = function (nums, target) {
7    let solve = (i, sum) => {
8        if (i >= nums.length) {
9            return sum == target ? 1 : 0
10        }
11        return solve(i + 1, sum + (nums[i] * -1)) + solve(i + 1, sum + nums[i])
12    }
13    return solve(0, 0)
14};