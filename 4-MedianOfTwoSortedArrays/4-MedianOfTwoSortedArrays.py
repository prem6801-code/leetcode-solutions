# Last updated: 24/07/2026, 23:55:48
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums3=nums1+nums2
        nums3.sort()
        a=len(nums3)
        if a%2!=0:
            med=nums3[(a//2)]
        elif a%2==0:
            med=(nums3[a//2]+nums3[(a//2)-1])/2
        return med