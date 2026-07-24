// Last updated: 24/07/2026, 23:47:22
/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    if (n == 0) return n
    let digitSum = 0;
    let digit = "";
    while (n) {
        let num = n % 10;
        // console.log(num)
        digitSum += num
        if (num !== 0) digit = num + digit
        n = Math.floor(n / 10)
    }
    // console.log(digit, digitSum)
    return parseInt(digit) * digitSum
};