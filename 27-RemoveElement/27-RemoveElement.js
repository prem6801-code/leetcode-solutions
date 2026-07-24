// Last updated: 24/07/2026, 23:55:09
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[i] = Infinity;
        } else {
            count++;
        }
    }
    nums.sort((a, b) => a - b)
    return count
};