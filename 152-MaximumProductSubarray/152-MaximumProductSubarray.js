// Last updated: 24/07/2026, 23:53:00
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxProduct = -Infinity;
    let prefix = 1;
    let suffix = 1;

    let i = 0
    let j = nums.length - 1

    while (i < nums.length) {
        prefix *= nums[i];
        suffix *= nums[j];
        maxProduct = Math.max(maxProduct, prefix, suffix);
        if (nums[i] == 0) prefix = 1
        if (nums[j] == 0) suffix = 1
        i++;
        j--;
    }

    return maxProduct;
};