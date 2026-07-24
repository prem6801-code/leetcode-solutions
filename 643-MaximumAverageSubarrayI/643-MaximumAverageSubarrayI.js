// Last updated: 24/07/2026, 23:50:43
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0; j = 0; i = 0; max = -Infinity;
    while (j < nums.length) {
        if (j < k - 1) {
            sum+=nums[j]
            j++
        } else {
            sum = sum + nums[j]
            max = Math.max(sum / k, max);
            sum = sum - nums[i];
            i++
            j++
            
        }
    }

    return max
};

