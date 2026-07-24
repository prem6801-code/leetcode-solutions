// Last updated: 24/07/2026, 23:51:24
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let currcount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count = Math.max(count, currcount)
            currcount = 0
        } else {
            currcount++;
        }
    }
    count = Math.max(count, currcount)
    return count;
};