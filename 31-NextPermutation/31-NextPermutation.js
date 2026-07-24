// Last updated: 24/07/2026, 23:55:01
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let idx = -1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }

    if (idx == -1) {
        nums.reverse()
        return
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[idx]) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            break;
        }
    }
    let j = nums.length - 1
    idx=idx+1
    while (idx <= j) {
        [nums[idx], nums[j]] = [nums[j], nums[idx]]
        idx++;
        j--;
    }
    return nums
};