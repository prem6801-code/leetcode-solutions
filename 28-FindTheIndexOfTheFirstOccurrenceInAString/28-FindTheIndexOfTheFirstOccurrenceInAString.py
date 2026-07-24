# Last updated: 24/07/2026, 23:55:06
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        flag=True
        i=0
        j=len(needle)
        while flag:
            if j<=len(haystack):
                if haystack[i:j]==needle:
                    flag=False
                    return i
                else:
                    i+=1
                    j+=1
            else:
                return -1
