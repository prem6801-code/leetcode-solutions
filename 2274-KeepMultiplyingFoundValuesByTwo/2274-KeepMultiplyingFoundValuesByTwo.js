// Last updated: 24/07/2026, 23:48:17
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, o) {
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == o) {
            o *= 2
        }
    }
    return o
};