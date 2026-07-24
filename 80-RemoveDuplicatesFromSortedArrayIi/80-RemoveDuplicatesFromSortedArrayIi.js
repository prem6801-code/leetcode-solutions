// Last updated: 24/07/2026, 23:54:03
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    let j = 0;
    let uniqueEl = nums[0];
    let uniquect = 0
    while (j < nums.length) {
        if (uniqueEl !== nums[j]) {
            if (uniquect <= 1) {
                nums[i] = uniqueEl
                i++;
            } else {
                nums[i] = uniqueEl
                nums[i + 1] = uniqueEl
                i = i + 2;
            }
            uniqueEl = nums[j]
            uniquect = 1
        } else {
            uniquect++
        }
        j++;
    }
    if (uniquect <= 1) {
        nums[i] = uniqueEl
        i++;
    } else {
        nums[i] = uniqueEl
        nums[i + 1] = uniqueEl
        i = i + 2;
    }
    return i
};