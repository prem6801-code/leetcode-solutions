// Last updated: 24/07/2026, 23:52:22
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0, j = 1; len = Infinity, sum = nums[0];
    while (j <= nums.length) {
        if (sum >= target) {
            len = Math.min((j - i), len);
            sum -= nums[i]
            i++;
        } else {
            sum += nums[j];
            j++
        }
    }
    return len == Infinity ? 0 : len
};