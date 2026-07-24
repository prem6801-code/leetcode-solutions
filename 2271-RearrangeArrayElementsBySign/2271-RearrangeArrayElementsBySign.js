// Last updated: 24/07/2026, 23:48:19
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let a1 = [];
    let a2 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            a1.push(nums[i])
        } else {
            a2.push(nums[i])
        }
    }
    let a1pt = 0;
    let a2pt = 0
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            nums[i] = a1[a1pt];
            a1pt++;
        } else {
            nums[i] = a2[a2pt];
            a2pt++;
        }
    }
    return nums;
};