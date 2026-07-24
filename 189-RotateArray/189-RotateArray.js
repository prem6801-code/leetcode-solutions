// Last updated: 24/07/2026, 23:52:38
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let reverse = (i, j)=>{
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            j--
        }
    }
    let n = k % nums.length;
    reverse(0,nums.length-1);
    reverse(0,n-1);
    reverse(n,nums.length-1)
};
