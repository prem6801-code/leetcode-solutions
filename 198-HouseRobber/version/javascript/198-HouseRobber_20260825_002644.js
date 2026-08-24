// Last updated: 25/08/2026, 00:26:44
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5
6var rob = function (nums) {
7    let dp = new Array(nums.length + 1)
8    let maxMoney = (i) => {
9        if (i >= nums.length) {
10            return 0;
11        }
12        if (dp[i] !== undefined) {
13            return dp[i]
14        }
15        return dp[i] = Math.max(nums[i] + maxMoney(i + 2), maxMoney(i + 1))
16    }
17    return maxMoney(0)
18};