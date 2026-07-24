# Last updated: 24/07/2026, 23:54:53
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []
        res = []
        def helper(i:int,sum:int):
            if i >= len(candidates) or sum<0:
                return
            if sum == 0:
                result.append(list(res))
                return
            res.append(candidates[i])
            helper(i,sum-candidates[i])
            res.pop()
            helper(i+1,sum)
            return
        helper(0,target)
        return result
        
        