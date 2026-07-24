// Last updated: 24/07/2026, 23:49:02
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1) arr.push(i);
    }
    for(let i = arr.length - 2;i>=0;i-- ){
        if(arr[i+1]-arr[i] - 1 < k ) return false 
    }
    return true
};