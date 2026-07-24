// Last updated: 24/07/2026, 23:49:18
/*https://leetcode.com/problems/angle-between-hands-of-a-clock/$0/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    if (hour == 12) hour = 0
    let ans = Math.abs((hour * 30) - (minutes * 6) + (2.5 * (minutes / 5)))
    return Math.min(ans, 360 - ans)
};
