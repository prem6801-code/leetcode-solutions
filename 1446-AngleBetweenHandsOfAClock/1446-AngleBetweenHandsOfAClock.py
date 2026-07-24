# Last updated: 24/07/2026, 23:49:25
class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        if hour==12:
            hour=0
        ang = abs(hour*30-minutes*6+minutes/5*2.5)
        print(ang)
        return min(360-ang,ang)
        