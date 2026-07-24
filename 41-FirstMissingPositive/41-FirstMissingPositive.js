// Last updated: 24/07/2026, 23:54:50
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b)
    let small = false;
    let min = Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
           if(nums[i]==1){
              small = true
           }
           if(nums[i+1]-nums[i]>1){
             min=Math.min(min,nums[i]+1)
           }
        }
    }
    // console.log(min)
    return small ? Math.min(min,nums[nums.length-1]+1) : 1;
};