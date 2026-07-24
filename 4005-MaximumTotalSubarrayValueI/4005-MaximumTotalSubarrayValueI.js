// Last updated: 24/07/2026, 23:47:23
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
    return (Math.max(...nums) - Math.min(...nums)) * k
};