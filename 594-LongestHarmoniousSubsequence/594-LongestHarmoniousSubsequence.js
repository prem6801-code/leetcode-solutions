// Last updated: 24/07/2026, 23:50:57
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let i = 0;
    let count = 0
    let j = 1;
    while (i < nums.length && j < nums.length) {
        if (nums[j] - nums[i] > 1) {
            i++
        } else if (nums[j] - nums[i] == 0) {
            j++;
        } else {
            if (nums[j] - nums[i] == 1) {
                count = Math.max(count, j - i + 1)
            }
            j++
        }
    }
    return count;
}