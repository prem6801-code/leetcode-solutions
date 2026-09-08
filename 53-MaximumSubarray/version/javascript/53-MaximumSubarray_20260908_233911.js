// Last updated: 08/09/2026, 23:39:11
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function (nums) {
6    let maxSum = -Infinity;
7    let sum = 0;
8    for (let i = 0; i < nums.length; i++) {
9        sum += nums[i];
10        maxSum = Math.max(sum, maxSum)
11        if (sum < 0) sum = 0
12    }
13    return maxSum;
14};