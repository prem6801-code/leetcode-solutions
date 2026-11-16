// Last updated: 17/11/2026, 00:08:30
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var findTargetSumWays = function (nums, target) {
7    let dp = Array.from({ length: nums.length }, () => new Array(Math.abs(target)))
8    let solve = (i, sum) => {
9        if (i >= nums.length) {
10            return sum == target ? 1 : 0
11        }
12        if (dp[i][sum] !== undefined) {
13            return dp[i][sum]
14        }
15        return dp[i][sum] = solve(i + 1, sum + (nums[i] * -1)) + solve(i + 1, sum + nums[i])
16    }
17    return solve(0, 0)
18};