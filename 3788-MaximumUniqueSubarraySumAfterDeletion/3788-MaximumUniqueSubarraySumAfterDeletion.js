// Last updated: 24/07/2026, 23:47:35
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let max = 0;
    let maxNum = -Infinity
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && max + nums[i] > max) {
            if (!set.has(nums[i])) {
                max += nums[i]
            }
            set.add(nums[i]);
        }
        maxNum = Math.max(nums[i], maxNum)
    }
    return max == 0 ? maxNum : max
};