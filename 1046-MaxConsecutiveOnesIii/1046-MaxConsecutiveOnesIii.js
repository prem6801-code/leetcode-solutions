// Last updated: 24/07/2026, 23:49:56
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0, j = 0, max = -Infinity, count = 0;
    while (j < nums.length) {
        if (nums[j] == 1) {
            count++;
            j++;
        } else if (nums[j] == 0) {
            if (k > 0) {
                count++;
                k--;
                j++;
            } else {
                while (nums[i] == 1) {
                    count--;
                    i++;
                }
                k++;
                i++;
                count--;
            }
        }
        max = Math.max(max,j-i);
    }
    return max;
};