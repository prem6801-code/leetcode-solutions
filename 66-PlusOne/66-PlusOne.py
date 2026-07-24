# Last updated: 24/07/2026, 23:54:23
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        temp=''
        s=''
        lst=[]
        for e in digits:
            s+=str(e)
        temp=str(int(s)+1)
        for a in temp:
            lst.append(int(a))
        return lst
