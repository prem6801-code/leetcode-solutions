// Last updated: 24/07/2026, 23:52:59
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
    let start = 0; let end = nums.length-1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (nums[mid - 1] > nums[mid] && nums[mid + 1] > nums[mid]) {
            return nums[mid]
        } else if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return nums[mid]
};