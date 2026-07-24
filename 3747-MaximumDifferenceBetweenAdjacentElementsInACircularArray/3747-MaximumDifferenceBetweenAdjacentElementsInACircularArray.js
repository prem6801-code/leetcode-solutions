// Last updated: 24/07/2026, 23:47:40
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[i + 1]))
    }
    return Math.max(max, Math.abs(nums[0] - nums[nums.length - 1]))
};