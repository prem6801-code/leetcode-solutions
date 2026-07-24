# Last updated: 24/07/2026, 23:55:44
class Solution:
    def isPalindrome(self, x: int) -> bool:
        n2=x
        rev=0
        while x>0:
            n1=x%10
            rev = rev*10+n1
            x=x//10
        if n2==rev:
            return True
        else:
            return False