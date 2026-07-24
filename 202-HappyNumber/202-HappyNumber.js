// Last updated: 24/07/2026, 23:52:30
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set();
    while (n) {
        let digitSum = 0;
        let num = n
        while (num) {
            digitSum += (num % 10) ** 2
            num = Math.floor(num / 10)
        }
        if (digitSum == 1) return true;
        if (set.has(digitSum)) return false;
        set.add(digitSum);
        n = digitSum;
    }
};