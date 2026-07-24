// Last updated: 24/07/2026, 23:54:58
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i] == target){
    //         return i;
    //     }
    // }
    let n = nums.length
    if (n == 1 && nums[0] == target) return 0
    let start = 0;
    let end = n - 1;
    let mid
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        //  console.log(start,end,mid)
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[mid] > target && nums[start] <= target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1;
};