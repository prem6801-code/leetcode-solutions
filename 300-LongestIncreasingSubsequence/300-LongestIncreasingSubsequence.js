// Last updated: 24/07/2026, 23:51:53
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1)
    let maxLis = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
                maxLis = Math.max(maxLis, dp[j])
            }
        }
    }
    return maxLis
};
