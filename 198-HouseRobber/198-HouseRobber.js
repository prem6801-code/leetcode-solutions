// Last updated: 24/07/2026, 23:52:35
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    let dp = Array.from({ length: nums.length + 1 })
    let maxMoney = (i) => {
        if (i >= nums.length) {
            return 0;
        }
        if (dp[i] !== undefined) {
            return dp[i]
        }
        return dp[i] = Math.max(nums[i] + maxMoney(i + 2), maxMoney(i + 1))
    }
    return maxMoney(0)
};