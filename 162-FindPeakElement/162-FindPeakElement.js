// Last updated: 24/07/2026, 23:52:56
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let i = 0;
    while (nums[i] < nums[i + 1] && i < nums.length) { i++}
    return i
};