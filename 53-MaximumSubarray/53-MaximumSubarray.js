// Last updated: 24/07/2026, 23:54:39
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = -Infinity;
    let sum = 0;
    for (let num of nums) {
        sum += num;
        maxSum = Math.max(sum,maxSum)
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};