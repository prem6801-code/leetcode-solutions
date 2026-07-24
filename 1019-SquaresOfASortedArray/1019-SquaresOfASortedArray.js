// Last updated: 24/07/2026, 23:50:00
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let i = 0; j = nums.length - 1;
    while (i < nums.length) {
        nums[i] = nums[i] * nums[i]
        i++;
    }
    return nums.sort((a, b) => a - b);
};