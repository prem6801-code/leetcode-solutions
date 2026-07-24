# Last updated: 24/07/2026, 23:55:55
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        HM={}
        for i in range (0,len(nums)):
            diff=target-nums[i]
            if (diff in HM):
                return [HM[diff],i]
          
            HM[nums[i]]=i
            
