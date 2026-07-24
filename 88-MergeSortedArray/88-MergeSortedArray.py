# Last updated: 24/07/2026, 23:54:11
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        k=0
        for i in range(0,m+n):
            if i>=m:
                nums1[i]=nums2[k]
                k+=1
        list.sort(nums1)
