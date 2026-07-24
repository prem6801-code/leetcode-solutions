# Last updated: 24/07/2026, 23:55:14
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        HM={}
        a=0
        n=0
        l1=[]
        for i in range(len(nums)):
            if nums[i] in HM:
                pass
            else:
                HM[nums[i]]=1
        kl=list(HM.keys())
        for i in range(len(kl)):
            nums[i]=kl[i]
        return len(kl)
        