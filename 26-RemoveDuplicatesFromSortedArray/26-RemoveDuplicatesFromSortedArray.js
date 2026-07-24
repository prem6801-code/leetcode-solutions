// Last updated: 24/07/2026, 23:55:07
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
        j++;
    }

    return i + 1
};