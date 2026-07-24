// Last updated: 24/07/2026, 23:50:38
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // let sumRange = (i, j) => {
    //     return preSum[j] - preSum[i]
    // }
    // let preSum = [0];
    // for (let i = 0; i < nums.length - 1; i++)preSum[i] = nums[i] + preSum[preSum.length - 1];

    // for (let i = 0; i < nums.length; i++) {
    //     let leftSum = i == 0 ? 0 : sumRange(0, i);
    //     let rightSum = i == nums.length - 1 ? 0 : sumRange(i, nums.length - 1);
    //     // console.log(leftSum,rightSum)
    //     if (leftSum == rightSum) return i;
    // }


    let rightSum = 0
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) rightSum += nums[i];
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        if (rightSum == leftSum) return i;
        leftSum += nums[i]
    }
    return -1
};
