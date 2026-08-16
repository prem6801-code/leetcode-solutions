// Last updated: 16/08/2026, 23:34:00
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    let map = new Map();
8    for(let i=0;i<nums.length;i++){
9      if(map.has(target - nums[i])){
10        return [map.get(target-nums[i]),i];
11      }else{
12        map.set(nums[i],i)
13      }
14    }
15
16    return []
17};