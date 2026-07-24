// Last updated: 24/07/2026, 23:48:30
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let start = 0
    let end = nums.length - 1;
    let mid;
    let arr = [];

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            let i = mid;
            let j = mid + 1;
            while (nums[i] == target) {
                arr.push(i);
                i--;
            }
            while (nums[j] == target) {
                arr.push(j)
                j++;
            }
            break;
        }else if(nums[mid]<target){
            start = mid+1;
        }else{
            end=mid-1;
        }
    }
    return arr.sort((a, b) => a - b)
};