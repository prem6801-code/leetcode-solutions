// Last updated: 24/07/2026, 23:54:36
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let far = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > far) {
            return false;
        }
        far = Math.max(far, nums[i] + i)
    }
    return true;
};