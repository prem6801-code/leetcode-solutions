// Last updated: 24/07/2026, 23:48:09
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let prefixSum = [];
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i] = (prefixSum[i - 1] || 0) + nums[i];
    }
    let ct = 0;
    let total = prefixSum[prefixSum.length - 1]
    for (let i = 0; i < prefixSum.length - 1; i++) {
        if (total - prefixSum[i] <= prefixSum[i]) {
            ct++
        }
    }
    return ct
};

