// Last updated: 24/07/2026, 23:54:46
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let maxidx = 0
    let count = 0;
    let max = 0
    for (let i = 0; i < nums.length - 1; i++) {
        maxidx = Math.max(maxidx, nums[i] + i);
        if (i == max) {
            count++
            max =  maxidx
        }
    }
    return count;
};