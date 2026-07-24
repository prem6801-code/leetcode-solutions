// Last updated: 24/07/2026, 23:48:33
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let max = -1
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         max = Math.max(max, nums[i] < nums[j] ? nums[j] - nums[i] : -1)
    //     }
    // }
    let i = 0;
    let j = i + 1;
    while (i < nums.length - 1 && j < nums.length) {
        if (nums[j] <= nums[i]) {
            i = j;
            j++
        } else {
            max = Math.max(max, nums[j] - nums[i])
            j++
        }

    }
    return max
};