// Last updated: 24/07/2026, 23:54:45
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    let helper = (i) => {
        if (i + 1 > nums.length) {
            result.push([...nums]);
            return;
        }
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            helper(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        return;
    }
    helper(0);
    return result;
};